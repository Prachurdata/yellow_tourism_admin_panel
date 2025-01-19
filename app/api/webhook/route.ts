import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { BookingStatus, PaymentStatus } from "@prisma/client";
import axios, { AxiosError } from "axios";
import { headers } from "next/headers";
import Razorpay from "razorpay";

interface PaymentEntity {
  order_id: string;
  id: string;
  contact: string;
  description: string;
}

interface WebhookPayload {
  payment: {
    entity: PaymentEntity;
  };
}

interface WebhookBody {
  event: string;
  payload: WebhookPayload;
}

export async function POST(req: NextRequest) {
  try {
    const signature = headers().get("x-razorpay-signature") as string;

    const rawBody = await req.text();
    console.log("body", rawBody);
    const body = JSON.parse(rawBody) as WebhookBody;
    const { event, payload } = body;
    const isValid = Razorpay.validateWebhookSignature(
      rawBody,
      signature,
      process.env.RAZORPAY_WEBHOOK_SECRET || ""
    );
    console.log("isValid", isValid, signature);
    if (!isValid) {
      return NextResponse.json(
        { msg: "Signature is not valid" },
        { status: 401 }
      );
    }

    console.log("orderID", payload.payment.entity.order_id);
    if (payload.payment.entity.description === "flight booking") {
      if (event === "payment.captured") {
        console.log("payment captured", payload);
        try {
          const booking = await prisma.flightBooking.findFirst({
            where: {
              orderId: payload.payment.entity.order_id,
            },
          });

          if (!booking) {
            return NextResponse.json({
              message: "Booking Not Found",
              status: 401,
            });
          }

          const updatedBooking = await prisma.flightBooking.update({
            where: {
              id: booking.id,
            },
            data: {
              paymentStatus: PaymentStatus.PAID,
              paymentId: payload.payment.entity.id,
              phone: payload.payment.entity.contact,
            },
          });

          console.log("updated booking", updatedBooking);

          const bookingRequestBody = {
            bookingId: updatedBooking.bookingId,
            paymentInfos: [
              {
                amount: updatedBooking.tripjackAmount,
              },
            ],
            travellerInfo: updatedBooking.travellerInfo,
            deliveryInfo: updatedBooking.deliveryInfo,
          };

          try {
            console.log("Booking request body:", bookingRequestBody);
            console.log("Making API request to TripJack...");

            const response = await axios.post(
              `${process.env.TRIPJACK_HOST}/oms/v1/air/book`,
              bookingRequestBody,
              {
                headers: {
                  "Content-Type": "application/json",
                  apikey: process.env.TRIPJACK_API_KEY,
                },
              }
            );

            console.log("API request completed");
            console.log("Response status:", response.status);
            console.log("Response data:", response.data);

            if (response.data.status.success === true) {
              const confirmedBooking = await prisma.flightBooking.update({
                where: {
                  id: booking.id,
                },
                data: {
                  status: BookingStatus.CONFIRMED,
                },
                include: {
                  user: true,
                },
              });

              const confirmResponse = await axios.post(
                `${process.env.TRIPJACK_HOST}/oms/v1/booking-details`,
                {
                  bookingId: booking.bookingId,
                },
                {
                  headers: {
                    "Content-Type": "application/json",
                    apikey: process.env.TRIPJACK_API_KEY,
                  },
                }
              );

              if (confirmResponse.status == 200) {
                const len =
                  confirmResponse.data.itemInfos.AIR.tripInfos[0].sI.length;
                console.log("length", len);
                const user = confirmedBooking.user.name;
                const fN =
                  confirmResponse.data.itemInfos.AIR.tripInfos[0].sI[0].fD.aI
                    .name +
                  " " +
                  confirmResponse.data.itemInfos.AIR.tripInfos[0].sI[0].fD.aI
                    .code +
                  confirmResponse.data.itemInfos.AIR.tripInfos[0].sI[0].fD.fN;
                const departureCity =
                  confirmResponse.data.itemInfos.AIR.tripInfos[0].sI[0].da
                    .name +
                  " " +
                  confirmResponse.data.itemInfos.AIR.tripInfos[0].sI[0].da.city;
                const arrivalCity =
                  confirmResponse.data.itemInfos.AIR.tripInfos[0].sI[len - 1].aa
                    .name +
                  " " +
                  confirmResponse.data.itemInfos.AIR.tripInfos[0].sI[len - 1].aa
                    .city;

                const departureDate =
                  confirmResponse.data.itemInfos.AIR.tripInfos[0].sI[0].dt;
                const arrivalDate =
                  confirmResponse.data.itemInfos.AIR.tripInfos[0].sI[0].dt;

                const details =
                  confirmResponse.data.itemInfos.AIR.travellerInfos
                    .map((traveller: any, index: number) => {
                      const fullName = `${traveller.ti} ${traveller.fN} ${traveller.lN}`;
                      const pnrDetails = Object.entries(traveller.pnrDetails)
                        .map(([flight, pnr]) => `${flight}: ${pnr}`)
                        .join(", ");

                      return `Data for Passenger ${
                        index + 1
                      }: Name: ${fullName}, PNRs: [${pnrDetails}]`;
                    })
                    .join(" | ");

                // console.log("the user is ", user);
                // console.log("the flight is ", fN);
                // console.log("the departure city is", departureCity);
                // console.log("the arrivalCity city is", arrivalCity);
                // console.log("the departure date is", departureDate);
                // console.log("the arrival date is", arrivalDate);
                // console.log("details are ", details);

                //send whatsapp message for booking confirmation
                await axios
                  .post(
                    "https://public.doubletick.io/whatsapp/message/template",
                    {
                      messages: [
                        {
                          to: "+91" + confirmedBooking.user.phone,
                          content: {
                            templateName: "flight_booking_final_v4",
                            language: "en",
                            templateData: {
                              body: {
                                placeholders: [
                                  user,
                                  fN,
                                  departureCity,
                                  departureDate,
                                  arrivalCity,
                                  arrivalDate,
                                  details,
                                ],
                              },
                            },
                          },
                        },
                      ],
                    },
                    {
                      headers: {
                        accept: "application/json",
                        "content-type": "application/json",
                        Authorization: "key_6yPeNaeSV9",
                      },
                    }
                  )
                  .then((response) => {
                    console.log("Response:", response.data);
                  })
                  .catch((error) => {
                    console.error(
                      "Error:",
                      error.response ? error.response.data : error.message
                    );
                  });

                await axios
                  .post("https://theyellowtourism.com/api/send-flight-mail", {
                    user,
                    fN,
                    departureCity,
                    departureDate,
                    arrivalCity,
                    arrivalDate,
                    details,
                    email: confirmedBooking.user.email,
                  })
                  .then((response) => {
                    console.log("Response:", response.data);
                  })
                  .catch((error) => {
                    console.error(
                      "Error:",
                      error.response ? error.response.data : error.message
                    );
                  });
              }

              return NextResponse.json({
                message: "Payment Captured and Booking Done",
                status: 200,
                data: response.data,
                booking: confirmedBooking,
              });
            }

            return NextResponse.json({
              message: "Booking API response was empty",
              status: 400,
            });
          } catch (error) {
            if (error instanceof AxiosError) {
              console.error("API request failed:");
              console.error("Error message:", error.message);
              console.error("Error response:", error.response?.data);
              console.error("Error status:", error.response?.status);

              return NextResponse.json({
                message: "Booking Failed",
                status: 400,
                error: error.response?.data || error.message,
              });
            }

            throw error; // Re-throw unexpected errors
          }
        } catch (error) {
          if (error instanceof Error) {
            console.error("Database error:", error.message);
            return NextResponse.json({
              message: "Database Operation Failed",
              status: 400,
              error: error.message,
            });
          }

          throw error; // Re-throw unexpected errors
        }
      }

      if (event === "payment.authorized") {
        const booking = await prisma.flightBooking.update({
          where: {
            orderId: payload.payment.entity.order_id,
          },
          data: {
            paymentStatus: PaymentStatus.AUTHORIZED,
            paymentId: payload.payment.entity.id,
            phone: payload.payment.entity.contact,
          },
        });
        return NextResponse.json({
          message: "Payment Authorized",
          status: 200,
          data: booking,
        });
      }

      if (event === "payment.failed") {
        const booking = await prisma.flightBooking.update({
          where: {
            orderId: payload.payment.entity.order_id,
          },
          data: {
            paymentStatus: PaymentStatus.FAILED,
            paymentId: payload.payment.entity.id,
            phone: payload.payment.entity.contact,
          },
        });
        return NextResponse.json({
          message: "Payment Failed",
          status: 200,
          data: booking,
        });
      }
    }

    if (payload.payment.entity.description === "hotel booking") {
      if (event === "payment.captured") {
        console.log("payment captured", payload);
        try {
          const booking = await prisma.hotelBooking.findFirst({
            where: {
              orderId: payload.payment.entity.order_id,
            },
          });

          if (!booking) {
            return NextResponse.json({
              message: "Booking Not Found",
              status: 401,
            });
          }

          const updatedBooking = await prisma.hotelBooking.update({
            where: {
              id: booking.id,
            },
            data: {
              paymentStatus: PaymentStatus.PAID,
              paymentId: payload.payment.entity.id,
              phone: payload.payment.entity.contact,
            },
          });

          console.log("updated booking", updatedBooking);

          const bookingRequestBody = {
            bookingId: updatedBooking.bookingId,
            paymentInfos: [
              {
                amount: updatedBooking.tripjackAmount,
              },
            ],
            roomTravellerInfo: updatedBooking.roomTravellerInfo,
            deliveryInfo: updatedBooking.deliveryInfo,
            type: "HOTEL",
          };

          try {
            console.log("Booking request body:", bookingRequestBody);
            console.log("Making API request to TripJack...");

            const response = await axios.post(
              `${process.env.TRIPJACK_HOST}/oms/v1/hotel/book`,
              bookingRequestBody,
              {
                headers: {
                  "Content-Type": "application/json",
                  apikey: process.env.TRIPJACK_API_KEY,
                },
              }
            );

            console.log("API request completed");
            console.log("Response status:", response.status);
            console.log("Response data:", response.data);

            if (response.data.status.success === true) {
              const confirmedBooking = await prisma.hotelBooking.update({
                where: {
                  id: booking.id,
                },
                data: {
                  status: BookingStatus.CONFIRMED,
                },
                include: {
                  user: true,
                },
              });

              const confirmedResponse = await axios.post(
                `${process.env.TRIPJACK_HOST}/oms/v1/hotel/booking-details`,
                {
                  bookingId: booking.bookingId,
                },
                {
                  headers: {
                    "Content-Type": "application/json",
                    apikey: process.env.TRIPJACK_API_KEY,
                  },
                }
              );
              if (confirmedResponse.status === 200) {
                const hotelInfo = confirmedResponse.data.itemInfos.HOTEL.hInfo;
                const hotel = confirmedResponse.data.itemInfos.HOTEL;
                const hotelName = hotelInfo.name;
                const rating = hotelInfo.rt;
                const address =
                  hotelInfo.ad.adr +
                  ", " +
                  hotelInfo.ad.adr2 +
                  ", " +
                  hotelInfo.ad.city.name;
                const phone = hotelInfo.cnt.ph;
                const checkIndate = hotel.query.checkinDate;
                const checkoutDate = hotel.query.checkoutDate;
                const rooms = hotel.query.roomInfo.length;

                await axios
                  .post(
                    "https://public.doubletick.io/whatsapp/message/template",
                    {
                      messages: [
                        {
                          to: "+91" + confirmedBooking.user.phone,
                          content: {
                            templateName: "hotel_booking_final",
                            language: "en",
                            templateData: {
                              body: {
                                placeholders: [
                                  hotelName,
                                  rating.toString(),
                                  address,
                                  phone,
                                  checkIndate,
                                  checkoutDate,
                                  rooms.toString(),
                                ],
                              },
                            },
                          },
                        },
                      ],
                    },
                    {
                      headers: {
                        accept: "application/json",
                        "content-type": "application/json",
                        Authorization: "key_6yPeNaeSV9",
                      },
                    }
                  )
                  .then((response) => {
                    console.log("Response:", response.data);
                  })
                  .catch((error) => {
                    console.error(
                      "Error:",
                      error.response ? error.response.data : error.message
                    );
                  });

                await axios
                  .post("https://theyellowtourism.com/api/send-hotel-mail", {
                    user: confirmedBooking.user.name,
                    hotelName,
                    rating,
                    address,
                    phone,
                    checkIndate,
                    checkoutDate,
                    rooms: 1,
                    email: confirmedBooking.user.email,
                  })
                  .then((response) => {
                    console.log("Response:", response.data);
                  })
                  .catch((error) => {
                    console.error(
                      "Error:",
                      error.response ? error.response.data : error.message
                    );
                  });

                return NextResponse.json({
                  message: "Payment Captured and Booking Done",
                  status: 200,
                  data: response.data,
                  booking: confirmedBooking,
                });
              }

              return NextResponse.json({
                message: "Booking API response was empty",
                status: 400,
              });
            }
          } catch (error) {
            if (error instanceof AxiosError) {
              console.error("API request failed:");
              console.error("Error message:", error.message);
              console.error("Error response:", error.response?.data);
              console.error("Error status:", error.response?.status);

              return NextResponse.json({
                message: "Booking Failed",
                status: 400,
                error: error.response?.data || error.message,
              });
            }

            throw error; // Re-throw unexpected errors
          }
        } catch (error) {
          if (error instanceof Error) {
            console.error("Database error:", error.message);
            return NextResponse.json({
              message: "Database Operation Failed",
              status: 400,
              error: error.message,
            });
          }

          throw error; // Re-throw unexpected errors
        }
      }

      if (event === "payment.authorized") {
        const booking = await prisma.hotelBooking.update({
          where: {
            orderId: payload.payment.entity.order_id,
          },
          data: {
            paymentStatus: PaymentStatus.AUTHORIZED,
            paymentId: payload.payment.entity.id,
            phone: payload.payment.entity.contact,
          },
        });
        return NextResponse.json({
          message: "Payment Authorized",
          status: 200,
          data: booking,
        });
      }

      if (event === "payment.failed") {
        const booking = await prisma.hotelBooking.update({
          where: {
            orderId: payload.payment.entity.order_id,
          },
          data: {
            paymentStatus: PaymentStatus.FAILED,
            paymentId: payload.payment.entity.id,
            phone: payload.payment.entity.contact,
          },
        });
        return NextResponse.json({
          message: "Payment Failed",
          status: 200,
          data: booking,
        });
      }
    }

    return NextResponse.json({
      message: `Unhandled payment event: ${event}`,
      status: 400,
    });
  } catch (error) {
    if (error instanceof Error) {
      console.error("Webhook handler error:", error.message);
      return NextResponse.json(
        {
          message: "Something went wrong",
          error: error.message,
        },
        {
          status: 500,
        }
      );
    }

    return NextResponse.json(
      {
        message: "An unexpected error occurred",
      },
      {
        status: 500,
      }
    );
  }
}

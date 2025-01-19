import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import { prisma } from "@/lib/db";

export async function POST(req: NextRequest) {
  try {
    const { bookingId } = await req.json();

    const booking = await prisma.flightBooking.findUnique({
      where: {
        bookingId,
      },
      select: {
        status: true,
      },
    });

    if (!booking) {
      return NextResponse.json({ error: "Booking not found" }, { status: 401 });
    }

    if (booking.status === "PENDING") {
      return NextResponse.json({ error: "Booking Pending" }, { status: 402 });
    }

    const response = await axios.post(
      `${process.env.TRIPJACK_HOST}/oms/v1/booking-details`,
      { bookingId },
      {
        headers: {
          "Content-Type": "application/json",
          apikey: process.env.TRIPJACK_API_KEY,
        },
      }
    );

    return NextResponse.json(response.data);
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

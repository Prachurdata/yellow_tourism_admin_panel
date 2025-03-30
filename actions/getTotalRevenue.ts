import { prisma } from "@/lib/db";

type BookingType = {
  amount: string;
  tripjackAmount: string | null;
};

export const getTotalRevenue = async () => {
  const flightBookings = await prisma.flightBooking.findMany({
    where: {
      status: "CONFIRMED",
    },
    select: {
      amount: true,
      tripjackAmount: true,
    },
  });

  const hotelBookings = await prisma.hotelBooking.findMany({
    where: {
      status: "CONFIRMED",
    },
    select: {
      amount: true,
      tripjackAmount: true,
    },
  });

  const totalRevenue =
    flightBookings.reduce((acc: number, curr: BookingType) => acc + parseInt(curr.amount), 0) +
    hotelBookings.reduce((acc: number, curr: BookingType) => acc + parseInt(curr.amount), 0);

  const totalTripjackRevenue =
    flightBookings.reduce(
      (acc: number, curr: BookingType) => acc + parseInt(curr.tripjackAmount || "0"),
      0
    ) +
    hotelBookings.reduce(
      (acc: number, curr: BookingType) => acc + parseInt(curr.tripjackAmount || "0"),
      0
    );

  return {
    totalRevenue: totalRevenue.toLocaleString("en-IN", {
      style: "currency",
      currency: "INR",
    }),
    totalTripjackRevenue: totalTripjackRevenue.toLocaleString("en-IN", {
      style: "currency",
      currency: "INR",
    }),
  };
};

import { prisma } from "@/lib/db";

const getTotalRevenue = async () => {
  const flightBookings = await prisma.hotelBooking.findMany({
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
    flightBookings.reduce((acc, curr) => acc + parseInt(curr.amount), 0) +
    hotelBookings.reduce((acc, curr) => parseInt(curr.amount), 0);

  const totalTripjackRevenue =
    flightBookings.reduce(
      (acc, curr) =>
        acc + parseInt(curr.tripjackAmount ? curr.tripjackAmount : "0"),
      0
    ) +
    hotelBookings.reduce(
      (acc, curr) => parseInt(curr.tripjackAmount ? curr.tripjackAmount : "0"),
      0
    );

  return { totalRevenue, totalTripjackRevenue };
};

export default getTotalRevenue;

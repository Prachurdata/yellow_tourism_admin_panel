import { prisma } from "@/lib/db";

const getTotalBookings = async () => {
  const flightBookings = await prisma.flightBooking.count({
    where: {
      status: "CONFIRMED",
    },
  });

  const hotelBookings = await prisma.hotelBooking.count({
    where: {
      status: "CONFIRMED",
    },
  });

  return { flightBookings, hotelBookings };
};

export default getTotalBookings;

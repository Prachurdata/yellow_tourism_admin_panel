import { prisma } from "@/lib/db";
import { ProductsClient } from "./components/client";
import { BookingsColumn } from "./components/columns";

export const dynamic = "force-dynamic";

const FlightBookingsPage = async ({
  params,
}: {
  params: { userID: string };
}) => {
  const user = await prisma.user.findUnique({
    where: {
      id: params.userID,
    },
    include: {
      flight_bookings: true,
      hotel_bookings: true,
    },
  });

  // Map flight bookings
  const flightBookings: BookingsColumn[] =
    user?.flight_bookings.map((item) => ({
      id: item.userId,
      bookingId: item.bookingId,
      paymentId: item.paymentId,
      amount: item.amount,
      status: item.status,
      phone: item.phone,
      user: user.name,
      paymentStatus: item.paymentStatus,
      type: "Flight", // Add type to distinguish booking source
    })) || [];

  // Map hotel bookings
  const hotelBookings: BookingsColumn[] =
    user?.hotel_bookings.map((item) => ({
      id: item.userId,
      bookingId: item.bookingId,
      paymentId: item.paymentId,
      amount: item.amount,
      status: item.status,
      phone: item.phone,
      user: user.name,
      paymentStatus: item.paymentStatus,
      type: "Hotel", // Add type to distinguish booking source
    })) || [];

  // Combine both booking types
  const combinedBookings = [...flightBookings, ...hotelBookings];

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <ProductsClient data={combinedBookings} />
      </div>
    </div>
  );
};

export default FlightBookingsPage;

import { prisma } from "@/lib/db";
import { ProductsClient } from "./components/client";
import { BookingsColumn } from "./components/columns";
import { Prisma } from "@prisma/client";

export const dynamic = "force-dynamic";

type BookingWithUser = Prisma.FlightBookingGetPayload<{
  include: { user: true }
}>;

const FlightBookingsPage = async () => {
  const bookings = await prisma.flightBooking.findMany({
    orderBy: {
      createdAt: 'desc'
    },
    include: {
      user: true
    }
  });

  const formattedBookings: BookingsColumn[] = bookings.map((item: BookingWithUser) => ({
    id: item.userId,
    bookingId: item.bookingId,
    paymentId: item.paymentId,
    amount: item.amount,
    status: item.status,
    phone: item.phone,
    user: item.user.name,
    paymentStatus: item.paymentStatus
  }));

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <ProductsClient data={formattedBookings} />
      </div>
    </div>
  );
};

export default FlightBookingsPage;

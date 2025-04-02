import { prisma } from "@/lib/db";
import { ProductsClient } from "./components/client";
import { BookingsColumn } from "./components/columns";

export const dynamic = "force-dynamic";

type BookingWithUser = {
  id: string;
  bookingId: string;
  amount: string;
  tripjackAmount: string | null;
  userId: string;
  status: "PENDING" | "CONFIRMED" | "CANCELLED";
  paymentStatus: "UNPAID" | "AUTHORIZED" | "PAID" | "REFUNDED" | "FAILED";
  orderId: string;
  paymentId: string | null;
  phone: string | null;
  gstNumber: string | null;
  user: {
    name: string;
  };
};

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

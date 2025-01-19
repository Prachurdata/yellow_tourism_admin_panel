import { prisma } from "@/lib/db";

import { ProductsClient } from "./components/client";
import { BookingsColumn } from "./components/columns";

export const dynamic = "force-dynamic";

const HotelBookingsPage = async () => {
  const bookings = await prisma.hotelBooking.findMany({
    orderBy: {
      createdAt: "desc",
    },
    include: {
      user: true,
    },
  });

  const formattedBookings: BookingsColumn[] = bookings.map((item) => ({
    id: item.userId,
    bookingId: item.bookingId,
    orderId: item.orderId,
    paymentId: item.paymentId,
    amount: item.amount,
    status: item.status,
    phone: item.phone,
    user: item.user.name,
    paymentStatus: item.paymentStatus,
  }));

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <ProductsClient data={formattedBookings} />
      </div>
    </div>
  );
};

export default HotelBookingsPage;

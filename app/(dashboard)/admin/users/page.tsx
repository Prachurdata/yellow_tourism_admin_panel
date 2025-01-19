import { prisma } from "@/lib/db";
import { ProductsClient } from "./components/client";
import { UsersColumn } from "./components/columns";

export const dynamic = "force-dynamic";

const ProductsPage = async () => {
  const users = await prisma.user.findMany({
    orderBy: {
      createdAt: "desc",
    },
    include: {
      flight_bookings: {
        where: {
          status: "CONFIRMED",
        },
        select: {
          amount: true,
          tripjackAmount: true,
        },
      },
      hotel_bookings: {
        where: {
          status: "CONFIRMED",
        },
        select: {
          amount: true,
          tripjackAmount: true,
        },
      },
    },
  });

  const formattedUsers: UsersColumn[] = users.map((user) => {
    // Calculate flight booking totals
    const flightAmountTotal = user.flight_bookings.reduce(
      (sum, booking) => sum + parseFloat(booking.amount || "0"),
      0
    );
    const flightTripjackTotal = user.flight_bookings.reduce(
      (sum, booking) => sum + parseFloat(booking.tripjackAmount || "0"),
      0
    );

    // Calculate hotel booking totals
    const hotelAmountTotal = user.hotel_bookings.reduce(
      (sum, booking) => sum + parseFloat(booking.amount || "0"),
      0
    );
    const hotelTripjackTotal = user.hotel_bookings.reduce(
      (sum, booking) => sum + parseFloat(booking.tripjackAmount || "0"),
      0
    );

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      totalBookingAmount: (flightAmountTotal + hotelAmountTotal).toFixed(2),
      totalTripjackAmount: (flightTripjackTotal + hotelTripjackTotal).toFixed(
        2
      ),
    };
  });

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <ProductsClient data={formattedUsers} />
      </div>
    </div>
  );
};

export default ProductsPage;

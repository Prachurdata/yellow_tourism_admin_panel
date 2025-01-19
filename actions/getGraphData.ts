import { prisma } from "@/lib/db";

export const getGraphRevenue = async () => {
  const bookings = await prisma.flightBooking.findMany({
    where: {
      status: "CONFIRMED",
      createdAt: {
        gte: new Date(new Date().getFullYear(), 0, 1), // January 1st of current year
        lt: new Date(new Date().getFullYear() + 1, 0, 1), // January 1st of next year
      },
    },
  });
  const monthlyRevenue: { [key: number]: number } = {};

  // Grouping the order items by month and summing the revenue
  for (const booking of bookings) {
    const month = booking.createdAt.getMonth(); // 0 for Jan, 1 for Feb, ...
    monthlyRevenue[month] = (monthlyRevenue[month] || 0) + 1;
  }

  // Converting the grouped data into the format expected by the graph
  const graphData = [
    { name: "Jan", total: 0 },
    { name: "Feb", total: 0 },
    { name: "Mar", total: 0 },
    { name: "Apr", total: 0 },
    { name: "May", total: 0 },
    { name: "Jun", total: 0 },
    { name: "Jul", total: 0 },
    { name: "Aug", total: 0 },
    { name: "Sep", total: 0 },
    { name: "Oct", total: 0 },
    { name: "Nov", total: 0 },
    { name: "Dec", total: 0 },
  ];

  // Filling in the revenue data

  for (const month in monthlyRevenue) {
    graphData[parseInt(month)].total = monthlyRevenue[parseInt(month)];
  }
  return graphData;
};

import { Prisma } from "@prisma/client";

export type BookingsColumn = {
  id: string;
  bookingId: string;
  paymentId: string | null;
  amount: string;
  status: Prisma.Enumerable<"PENDING" | "CONFIRMED" | "CANCELLED">;
  phone: string | null;
  user: string;
  paymentStatus: Prisma.Enumerable<"UNPAID" | "AUTHORIZED" | "PAID" | "REFUNDED" | "FAILED">;
}; 
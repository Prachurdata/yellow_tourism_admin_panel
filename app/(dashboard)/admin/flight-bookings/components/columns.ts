import { BookingStatus, PaymentStatus } from ".prisma/client";

export type BookingsColumn = {
  id: string;
  bookingId: string;
  paymentId: string | null;
  amount: string;
  status: BookingStatus;
  phone: string | null;
  user: string;
  paymentStatus: PaymentStatus;
}; 
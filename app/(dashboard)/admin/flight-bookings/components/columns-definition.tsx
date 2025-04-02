"use client";

import { ColumnDef } from "@tanstack/react-table";
import type { BookingStatus, PaymentStatus } from ".prisma/client";
import { Badge } from "@/components/ui/badge";

import { BookingsColumn } from "./columns";

export const columns: ColumnDef<BookingsColumn>[] = [
  {
    accessorKey: "bookingId",
    header: "Booking ID",
  },
  {
    accessorKey: "user",
    header: "User",
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as BookingStatus;
      return (
        <Badge variant={status === "CONFIRMED" ? "success" : status === "PENDING" ? "warning" : "destructive"}>
          {status.toLowerCase()}
        </Badge>
      );
    },
  },
  {
    accessorKey: "paymentStatus",
    header: "Payment Status",
    cell: ({ row }) => {
      const status = row.getValue("paymentStatus") as PaymentStatus;
      return (
        <Badge variant={status === "PAID" ? "success" : status === "AUTHORIZED" ? "warning" : "destructive"}>
          {status.toLowerCase()}
        </Badge>
      );
    },
  },
  {
    accessorKey: "phone",
    header: "Phone",
  },
  {
    accessorKey: "paymentId",
    header: "Payment ID",
  }
]; 
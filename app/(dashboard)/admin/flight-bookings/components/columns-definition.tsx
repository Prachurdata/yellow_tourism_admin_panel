"use client";

import { Badge } from "@/components/ui/badge";
import { ColumnDef } from "@tanstack/react-table";
import { Row } from "@tanstack/react-table";
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
    cell: ({ row }: { row: Row<BookingsColumn> }) => {
      const status = row.getValue("status") as "PENDING" | "CONFIRMED" | "CANCELLED";
      return (
        <Badge className={
          status === "CONFIRMED" ? "bg-green-500" : 
          status === "PENDING" ? "bg-yellow-500" : "bg-red-500"
        }>
          {status.toLowerCase()}
        </Badge>
      );
    },
  },
  {
    accessorKey: "paymentStatus",
    header: "Payment Status",
    cell: ({ row }: { row: Row<BookingsColumn> }) => {
      const status = row.getValue("paymentStatus") as "UNPAID" | "AUTHORIZED" | "PAID" | "REFUNDED" | "FAILED";
      return (
        <Badge className={
          status === "PAID" ? "bg-green-500" : 
          status === "AUTHORIZED" ? "bg-yellow-500" : "bg-red-500"
        }>
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
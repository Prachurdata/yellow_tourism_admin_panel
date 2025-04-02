"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";
import { CellAction } from "./cell-action";
import { Badge } from "lucide-react";
import React from "react";


export type BookingsColumn = {
  id: string;
  bookingId: string;
  paymentId: string | null;
  amount: string;
  status: string;
  phone: string | null;
  user: string;
  paymentStatus: string;
};

export const columns: ColumnDef<BookingsColumn>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "bookingId",
    header: "Booking ID",
    enableSorting: true,
  },
  {
    accessorKey: "paymentId",
    header: "Payment ID",
    enableSorting: true,
  },
  {
    accessorKey: "amount",
    header: "Amount",
    enableSorting: true,
  },
  {
    accessorKey: "status",
    header: "Booking Status",
    enableSorting: true,
    cell: ({ row }) => {
      const status = row.getValue("status") as string;
      return (
        <Badge 
          variant={status === "CONFIRMED" ? "success" : status === "PENDING" ? "warning" : "destructive"}
        >
          {status}
        </Badge>
      );
    },
  },
  {
    accessorKey: "paymentStatus",
    header: "Payment Status",
    enableSorting: true,
    cell: ({ row }) => {
      const status = row.getValue("paymentStatus") as string;
      return (
        <Badge 
          variant={status === "PAID" ? "success" : "destructive"}
        >
          {status}
        </Badge>
      );
    },
  },
  {
    accessorKey: "phone",
    header: "Phone",
    enableSorting: true,
  },
  {
    accessorKey: "user",
    header: "User",
    enableSorting: true,
  },
  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];

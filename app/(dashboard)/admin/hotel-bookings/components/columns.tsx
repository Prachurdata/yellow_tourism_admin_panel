"use client";

import { ColumnDef } from "@tanstack/react-table";
// import { Checkbox } from "@/components/ui/checkbox"
import { CellAction } from "./cell-action";

export type BookingsColumn = {
  id: string;
  bookingId: string;
  orderId: string;
  paymentId: string | null;
  amount: string;
  status: string;
  phone: string | null;
  user: string;
  paymentStatus: string;
};

export const columns: ColumnDef<BookingsColumn>[] = [
  // {
  //   id: "select",
  //   header: ({ table }) => (
  //     <Checkbox
  //       checked={table.getIsAllPageRowsSelected()}
  //       onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
  //       aria-label="Select all"
  //     />
  //   ),
  //   cell: ({ row }) => (
  //     <Checkbox
  //       checked={row.getIsSelected()}
  //       onCheckedChange={(value) => row.toggleSelected(!!value)}
  //       aria-label="Select row"
  //     />
  //   ),
  //   enableSorting: false,
  //   enableHiding: false,
  // },
  {
    accessorKey: "bookingId",
    header: "Booking ID",
  },
  {
    accessorKey: "paymentId",
    header: "Payment ID",
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },
  {
    accessorKey: "status",
    header: "Booking Status",
  },
  {
    accessorKey: "paymentStatus",
    header: "Payment Status",
  },
  {
    accessorKey: "phone",
    header: "Phone",
  },
  {
    accessorKey: "user",
    header: "User",
  },
  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];

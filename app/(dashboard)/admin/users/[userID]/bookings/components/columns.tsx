"use client";

import { ColumnDef } from "@tanstack/react-table";
// import { Checkbox } from "@/components/ui/checkbox"
import { CellAction } from "./cell-action";

const type = ["flight", "hotel"];
export type BookingsColumn =
  | {
      id: string;
      bookingId: string;
      paymentId: string | null;
      amount: string;
      status: string;
      phone: string | null;
      user: string;
      paymentStatus: string;
      type: string;
    }
  | undefined;

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
    header: "booking Status",
  },
  {
    accessorKey: "type",
    header: ({ table }) => (
      <select
        title="filter"
        //@ts-expect-error enum
        value={table.getColumn("type")?.getFilterValue()}
        onChange={(event) =>
          table.getColumn("type")?.setFilterValue(event.target.value)
        }
        className="bg-white border p-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      >
        <option value="">Type</option>
        {Object.values(type).map((option: any, i) => (
          <option key={i} value={option}>
            {option.charAt(0).toUpperCase() + option.slice(1)}
          </option>
        ))}
      </select>
    ),
    enableColumnFilter: true,
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

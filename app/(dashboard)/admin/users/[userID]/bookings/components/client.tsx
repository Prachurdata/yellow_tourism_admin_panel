"use client";

import { DataTable } from "@/components/ui/data-table";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";

import { BookingsColumn, columns } from "./columns";

interface ProductsClientProps {
  data: BookingsColumn[] | undefined;
}

export const ProductsClient: React.FC<ProductsClientProps> = ({ data }) => {
  if (!data) return <div>No Bookings Found</div>;

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Bookings (${data.length})`}
          description="Manage Bookings."
        />
      </div>
      <Separator />
      <DataTable<BookingsColumn>
        searchKeys={[
          { key: "bookingId", label: "booking ID" },
          { key: "paymentId", label: "payment ID" },
          { key: "phone", label: "phone" },
          { key: "user", label: "user" }
        ]}
        columns={columns}
        data={data}
      />
      <Separator />
    </>
  );
};

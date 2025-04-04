"use client";

import { DataTable } from "@/components/ui/data-table";
import { BookingsColumn, columns } from "./columns";
import { PageHeader } from "@/components/ui/page-header";
import { Card } from "@/components/ui/card";

interface ProductsClientProps {
  data: BookingsColumn[];
}

export const ProductsClient: React.FC<ProductsClientProps> = ({ data }) => {
  return (
    <div className="space-y-4">
      <PageHeader
        title={`Hotel Bookings (${data.length})`}
        description="Track and manage hotel bookings"
      />
      <Card className="p-4 shadow-md dark:shadow-gray-800">
        <DataTable 
          searchKeys={[
            { key: "bookingId", label: "booking ID" },
            { key: "paymentId", label: "payment ID" },
            { key: "phone", label: "phone" },
            { key: "user", label: "user" }
          ]}
          columns={columns} 
          data={data}
          className="bg-white dark:bg-gray-900 rounded-lg"
          exportFileName="hotel-bookings"
          filterableColumns={[
            {
              id: "status",
              title: "Booking Status",
              options: [
                { label: "Confirmed", value: "CONFIRMED" },
                { label: "Pending", value: "PENDING" }
              ]
            },
            {
              id: "paymentStatus",
              title: "Payment Status",
              options: [
                { label: "Paid", value: "PAID" },
                { label: "Unpaid", value: "UNPAID" }
              ]
            }
          ]}
        />
      </Card>
    </div>
  );
};

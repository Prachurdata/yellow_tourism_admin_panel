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
          searchKey="bookingId" 
          columns={columns} 
          data={data}
          className="bg-white dark:bg-gray-900 rounded-lg"
        />
      </Card>
    </div>
  );
};

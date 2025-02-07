"use client";

import { DataTable } from "@/components/ui/data-table";
import { UsersColumn, columns } from "./columns";
import { useRouter } from "next/navigation";
import { PageHeader } from "@/components/ui/page-header";
import { Card } from "@/components/ui/card";

interface ProductsClientProps {
  data: UsersColumn[];
}

export const ProductsClient: React.FC<ProductsClientProps> = ({ data }) => {
  const router = useRouter();

  return (
    <div className="space-y-4">
      <PageHeader
        title={`Users (${data.length})`}
        description="Manage your application users"
        showAddButton
        onAddClick={() => router.push(`/admin/add-user`)}
      />
      <Card className="p-4 shadow-md dark:shadow-gray-800">
        <DataTable 
          searchKey="name" 
          columns={columns} 
          data={data}
          className="bg-white dark:bg-gray-900 rounded-lg"
        />
      </Card>
    </div>
  );
};

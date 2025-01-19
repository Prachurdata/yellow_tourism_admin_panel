"use client";

import { DataTable } from "@/components/ui/data-table";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { UsersColumn, columns } from "./columns";
import { useRouter } from "next/navigation";

interface ProductsClientProps {
  data: UsersColumn[];
}

export const ProductsClient: React.FC<ProductsClientProps> = ({ data }) => {
  const router = useRouter();
  return (
    <>
      <div className="flex items-center justify-between">
        <Heading title={`Users (${data.length})`} description="Manage Users." />
        <Button onClick={() => router.push(`/admin/add-user`)}>
          <Plus className="mr-2 h-4 w-4" /> Add New
        </Button>
      </div>
      <Separator />
      <DataTable searchKey="name" columns={columns} data={data} />
      <Separator />
    </>
  );
};

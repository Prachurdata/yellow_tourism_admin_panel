"use client";

import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { Plus } from "lucide-react";

interface PageHeaderProps {
  title: string;
  description: string;
  showAddButton?: boolean;
  onAddClick?: () => void;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  description,
  showAddButton,
  onAddClick,
}) => {
  return (
    <>
      <div className="flex items-center justify-between">
        <Heading 
          title={title} 
          description={description}
          className="bg-gradient-to-r from-gray-800 to-gray-600 dark:from-gray-200 dark:to-gray-400 bg-clip-text text-transparent"
        />
        {showAddButton && (
          <Button
            onClick={onAddClick}
            className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 shadow-md hover:shadow-lg"
          >
            <Plus className="mr-2 h-4 w-4" /> Add New
          </Button>
        )}
      </div>
      <Separator className="my-4" />
    </>
  );
}; 
"use client";

import { useState } from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
  RowSelectionState,
  getSortedRowModel,
} from "@tanstack/react-table";
import * as XLSX from 'xlsx';
import { FileDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
// import { useRouter } from "next/navigation";

interface DataTableProps<TData extends Record<string, any>, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  searchKeys: { key: string; label: string }[];
  className?: string;
  exportFileName?: string;
  filterableColumns?: {
    id: string;
    title: string;
    options: { label: string; value: string }[];
  }[];
  // redirectUrl: string | null;
}

export function DataTable<TData extends Record<string, any>, TValue>({
  columns,
  data,
  searchKeys,
  className,
  exportFileName = "exported-data",
  filterableColumns = [],
  // redirectUrl,
}: DataTableProps<TData, TValue>) {
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [globalFilter, setGlobalFilter] = useState("");
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({});

  // Custom filter function
  const fuzzyFilter = (row: any, columnId: string, value: string) => {
    const searchValue = value.toLowerCase();
    const cellValue = String(row.getValue(columnId) || '').toLowerCase();
    return cellValue.includes(searchValue);
  };

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter,
    onRowSelectionChange: setRowSelection,
    state: {
      columnFilters,
      globalFilter,
      rowSelection,
    },
    enableRowSelection: true,
    enableSorting: true,
    filterFns: {
      fuzzy: fuzzyFilter,
    },
    globalFilterFn: (row, _columnId, filterValue) => {
      const searchValue = filterValue.toLowerCase();
      return searchKeys.some(({ key }) => {
        const cellValue = String(row.getValue(key) || '').toLowerCase();
        return cellValue.includes(searchValue);
      });
    },
    initialState: {
      pagination: { pageSize: 8 },
    },
  });

  // Calculate pagination info
  const totalRows = table.getFilteredRowModel().rows.length;
  const pageSize = table.getState().pagination.pageSize;
  const pageCount = Math.ceil(totalRows / pageSize);
  const currentPage = table.getState().pagination.pageIndex + 1;
  const rangeStart = (currentPage - 1) * pageSize + 1;
  const rangeEnd = Math.min(currentPage * pageSize, totalRows);

  // const router = useRouter();
  // const handleRowClick = (id: string, event: any) => {
  //   if (!redirectUrl) return;

  //   if (event.target.tagName === "DIV") {
  //     return;
  //   }

  //   router.push("/" + redirectUrl + "/" + id);
  // };

  // Export functions
  const exportToExcel = (exportData: TData[]) => {
    const ws = XLSX.utils.json_to_sheet(exportData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Data");
    XLSX.writeFile(wb, `${exportFileName}.xlsx`);
  };

  const exportToCSV = (exportData: TData[]) => {
    if (exportData.length === 0) return;
    
    const headers = Object.keys(exportData[0]).join(',');
    const csvData = exportData.map(row => 
      Object.values(row as Record<string, unknown>)
        .map(value => 
          typeof value === 'string' ? `"${value}"` : String(value)
        )
        .join(',')
    );
    
    const csv = [headers, ...csvData].join('\n');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `${exportFileName}.csv`;
    link.click();
  };

  // Function to handle global search across multiple columns
  const handleSearch = (value: string) => {
    setGlobalFilter(value);
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <Input
            placeholder={`Search by ${searchKeys.map(k => k.label).join(', ')}...`}
            value={globalFilter}
            onChange={(event) => handleSearch(event.target.value)}
            className="w-full sm:w-[300px]"
          />
          <div className="flex flex-wrap items-center gap-2">
            {filterableColumns.map((column) => (
              <DropdownMenu key={column.id}>
                <DropdownMenuTrigger asChild>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="h-9 min-w-[180px] justify-between"
                  >
                    <span className="truncate mr-2">
                      {column.title}: {table.getColumn(column.id)?.getFilterValue() as string || 'All'}
                    </span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-[180px]">
                  <DropdownMenuLabel className="font-normal">
                    <p className="text-sm font-medium leading-none mb-1">
                      {column.title}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Select a filter
                    </p>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    onClick={() => {
                      table.getColumn(column.id)?.setFilterValue(null);
                    }}
                    className="justify-between"
                  >
                    All
                  </DropdownMenuItem>
                  {column.options.map((option) => (
                    <DropdownMenuItem
                      key={option.value}
                      onClick={() => {
                        table.getColumn(column.id)?.setFilterValue(option.value);
                      }}
                      className="justify-between"
                    >
                      {option.label}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-2 ml-auto">
          <div className="text-sm text-muted-foreground">
            Total records: {totalRows}
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="h-9">
                <FileDown className="h-4 w-4 mr-2" />
                Export
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[180px]">
              <DropdownMenu>
                <DropdownMenuTrigger className="w-full">
                  <DropdownMenuItem>
                    Export All
                    <span className="ml-auto">→</span>
                  </DropdownMenuItem>
                </DropdownMenuTrigger>
                <DropdownMenuContent side="right" className="w-[120px]">
                  <DropdownMenuItem onClick={() => exportToExcel(data)}>
                    Excel
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => exportToCSV(data)}>
                    CSV
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger className="w-full">
                  <DropdownMenuItem
                    disabled={table.getSelectedRowModel().rows.length === 0}
                  >
                    Export Selected
                    <span className="ml-auto">→</span>
                  </DropdownMenuItem>
                </DropdownMenuTrigger>
                <DropdownMenuContent side="right" className="w-[120px]">
                  <DropdownMenuItem 
                    onClick={() => exportToExcel(table.getSelectedRowModel().rows.map(row => row.original))}
                  >
                    Excel
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    onClick={() => exportToCSV(table.getSelectedRowModel().rows.map(row => row.original))}
                  >
                    CSV
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div className={`rounded-md border ${className}`}>
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id} className="font-semibold">
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                  className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-between">
        <div className="text-sm text-gray-500 dark:text-gray-400">
          Showing {rangeStart} to {rangeEnd} of {totalRows} records
        </div>
        <div className="flex items-center space-x-6">
          <div className="text-sm text-gray-500 dark:text-gray-400">
            Page {currentPage} of {pageCount}
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
              className="hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              Previous
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
              className="hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { Printer, Download, Search, Calendar, ChevronDown } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export default function AgentCommission() {
  const commissions = [
    {
      date: "16-04-2024",
      name: "Md.Mahmudul Hasan Fahad",
      customerId: "BG01",
      passport: "A000009020",
      from: "Dhaka",
      to: "Malaysia",
      totalCost: "15,00,000",
      advance: "15,00,000",
      commission: "15,000",
    },
    {
      date: "16-04-2024",
      name: "Md.Mahmudul Hasan Fahad",
      customerId: "BG01",
      passport: "A000009020",
      from: "Dhaka",
      to: "Malaysia",
      totalCost: "15,00,000",
      advance: "15,00,000",
      commission: "15,000",
    },
    {
      date: "16-04-2024",
      name: "Md.Mahmudul Hasan Fahad",
      customerId: "BG01",
      passport: "A000009020",
      from: "Dhaka",
      to: "Malaysia",
      totalCost: "15,00,000",
      advance: "15,00,000",
      commission: "15,000",
    },
  ];

  return (
    <div className="bg-gray-100 w-full">
      <div className="overflow-x-auto bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Commission List</h2>

        {/* Filters */}
        <div className="mb-6 flex flex-col sm:flex-row items-start sm:items-center gap-3">
          <div className="flex-1 relative w-full sm:w-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search by Passport No"
              className="w-full sm:w-64 pl-10 pr-4 py-2.5 border border-gray-300 rounded text-sm focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="flex items-center gap-2 px-4 py-2.5 border border-gray-300 rounded bg-white cursor-pointer hover:border-blue-500 transition">
            <span className="text-sm text-gray-600">From Date</span>
            <Calendar className="w-4 h-4 text-gray-400" />
            <span className="text-sm text-gray-600">To Date</span>
          </div>

          <div className="flex items-center gap-2 px-4 py-2.5 border border-gray-300 rounded bg-white cursor-pointer hover:border-blue-500 transition">
            <span className="text-sm font-medium">All Booking File</span>
            <ChevronDown className="w-4 h-4 text-gray-600" />
          </div>
        </div>

         <div className="overflow-x-auto rounded-sm border border-gray-200 w-full">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-100 text-white text-left text-sm md:text-base">
              <TableHead className="p-2 md:p-3">Apply Date</TableHead>
              <TableHead className="p-2 md:p-3">Customer Name</TableHead>
              <TableHead className="p-2 md:p-3">Customer ID</TableHead>
              <TableHead className="p-2 md:p-3">Passport No</TableHead>
              <TableHead className="p-2 md:p-3">From</TableHead>
              <TableHead className="p-2 md:p-3">To</TableHead>
              <TableHead className="p-2 md:p-3">Total Cost</TableHead>
              <TableHead className="p-2 md:p-3">Advance</TableHead>
              <TableHead className="p-2 md:p-3">Commission</TableHead>
              <TableHead className="p-2 md:p-3 text-center">
                Print / Invoice
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody className="text-gray-700 text-sm md:text-base">
            {commissions.map((item, index) => (
              <TableRow
                key={index}
                className="border-b hover:bg-gray-100 transition-colors"
              >
                <TableCell className="p-2 md:p-3 flex items-center gap-2">
                  <input type="checkbox" className="accent-blue-600" />
                  {item.date}
                </TableCell>
                <TableCell className="p-2 md:p-3">{item.name}</TableCell>
                <TableCell className="p-2 md:p-3">{item.customerId}</TableCell>
                <TableCell className="p-2 md:p-3">{item.passport}</TableCell>
                <TableCell className="p-2 md:p-3">{item.from}</TableCell>
                <TableCell className="p-2 md:p-3">{item.to}</TableCell>
                <TableCell className="p-2 md:p-3">{item.totalCost}</TableCell>
                <TableCell className="p-2 md:p-3">{item.advance}</TableCell>
                <TableCell className="p-2 md:p-3">{item.commission}</TableCell>
                <TableCell className="p-2 md:p-3 flex justify-center gap-3 text-blue-600">
                  <Printer className="w-5 h-5 cursor-pointer hover:text-blue-800" />
                  <Download className="w-5 h-5 cursor-pointer hover:text-blue-800" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
         </div>

      </div>

      <div className="flex justify-end mt-5">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}

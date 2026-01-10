
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import {
  Search,
  Calendar,
  ChevronDown,
  Printer,
  Download,
} from "lucide-react";

import { Checkbox } from "../ui/checkbox";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../ui/pagination";

export default function CommissionList() {
  const data = [
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
    <div className="bg-gray-50 shadow-sm rounded-2xl p-4 sm:p-6 w-full">

      <div className="mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
        <h1 className="text-2xl font-bold text-gray-800">
          Commission List
        </h1>
      </div>
      {/* Filters */}
      <div className="mb-6 flex flex-col sm:flex-row items-start sm:items-center gap-3 ">
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

      {/* Table */}

      <Table>
        <TableHeader>
          <TableRow className="bg-gray-100">
            <TableHead>Apply Date</TableHead>
            <TableHead>Customer Name</TableHead>
            <TableHead>Customer Id</TableHead>
            <TableHead>Passport No</TableHead>
            <TableHead>From</TableHead>
            <TableHead>To</TableHead>
            <TableHead>Total Cost</TableHead>
            <TableHead>Total Paid</TableHead>
            <TableHead>Advance</TableHead>
            <TableHead>Commission</TableHead>
            <TableHead>Print / Invoice</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {data.map((item, i) => (
            <TableRow key={i} className="hover:bg-gray-50">
              <TableCell>
                <Checkbox />
                {item.date}
              </TableCell>
              <TableCell className="text-gray-800">{item.name}</TableCell>
              <TableCell className="text-gray-800">{item.customerId}</TableCell>
              <TableCell className="text-gray-800">{item.passport}</TableCell>
              <TableCell className="text-gray-800">{item.from}</TableCell>
              <TableCell className="text-gray-800">{item.to}</TableCell>
              <TableCell className="text-gray-800">{item.totalCost}</TableCell>
              <TableCell className="text-gray-800">{item.totalCost}</TableCell>
              <TableCell className="text-gray-800">{item.advance}</TableCell>
              <TableCell className="text-gray-800">{item.commission}</TableCell>
              <TableCell className="font-medium flex gap-2">
                <Printer className="w-5 h-5 cursor-pointer hover:text-blue-800" />
                <Download className="w-5 h-5 cursor-pointer hover:text-blue-800" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>


      <div className="flex flex-col justify-end mt-5">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">
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

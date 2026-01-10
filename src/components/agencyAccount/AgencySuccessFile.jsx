import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Search } from "lucide-react";
import { Calendar } from "lucide-react";
import { ChevronDown } from "lucide-react";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "../ui/pagination";


export default function AgencySuccessFile() {
  const data = [
    {
      applyDate: "16-04-2024",
      name: "Md.Mahamudul Hasan Fahad",
      passport: "A00009020",
      from: "Dhaka",
      to: "Malaysia",
      totalCost: "15,00,000",
      totalPaid: "15,00,000",
      flightDate: "02-05-2026",
      status: "Flight Successfull",
    },
    {
      applyDate: "16-04-2024",
      name: "Md.Mahamudul Hasan Fahad",
      passport: "A00009020",
      from: "Dhaka",
      to: "Malaysia",
      totalCost: "15,00,000",
      totalPaid: "15,00,000",
      flightDate: "02-05-2026",
      status: "Flight Successfull",
    },
    {
      applyDate: "16-04-2024",
      name: "Md.Mahamudul Hasan Fahad",
      passport: "A00009020",
      from: "Dhaka",
      to: "Malaysia",
      totalCost: "15,00,000",
      totalPaid: "15,00,000",
      flightDate: "02-05-2026",
      status: "Flight Successfull",
    },
    {
      applyDate: "16-04-2024",
      name: "Md.Mahamudul Hasan Fahad",
      passport: "A00009020",
      from: "Dhaka",
      to: "Malaysia",
      totalCost: "15,00,000",
      totalPaid: "15,00,000",
      flightDate: "02-05-2026",
      status: "Flight Successfull",
    },
  ];

  return (
    <div className="bg-white rounded-2xl p-4 sm:p-6 w-full">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
          <h1 className="text-2xl font-bold text-gray-800">
            Ready For Flight
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
          <TableHeader className={""}>
            <TableRow className="bg-gray-100">
              <TableHead >Apply Date</TableHead>
              <TableHead >Customer Name</TableHead>
              <TableHead >Passport No</TableHead>
              <TableHead >From</TableHead>
              <TableHead >To</TableHead>
              <TableHead >Total Cost</TableHead>
              <TableHead >Total Paid</TableHead>
              <TableHead >Flight Date</TableHead>
              <TableHead className="text-center">Status</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {data.map((item, i) => (
              <TableRow key={i} className="hover:bg-gray-50">
                <TableCell>
                  <Checkbox />
                  {item.applyDate}
                </TableCell>
                <TableCell className="text-gray-800">{item.name}</TableCell>
                <TableCell className="text-gray-800">{item.passport}</TableCell>
                <TableCell className="text-gray-800">{item.from}</TableCell>
                <TableCell className="text-gray-800">{item.to}</TableCell>
                <TableCell className="text-gray-800">
                  {item.totalCost}
                </TableCell>
                <TableCell className="text-gray-800">
                  {item.totalPaid}
                </TableCell>
                <TableCell className="text-gray-800">
                  {item.flightDate}
                </TableCell>
                <TableCell className="text-green-600 font-medium text-right">
                  {item.status}
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
    </div>
  );
}

"use client";

import CountryFlag from "../../assets/colombia.png";
import {
  Search,
  Calendar,
  ChevronDown,
  Eye,
  MoreHorizontal,
} from "lucide-react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "../ui/select";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../ui/pagination";
import { Link } from "react-router";
import { Input } from "../ui/input";

export default function AgentAllBooking() {

  return (
    <div className="min-h-screen bg-gray-100 w-full">
      <div className="max-w-7xl mx-auto bg-white p-6 rounded-lg shadow">
        {/* Header */}
        <div className="mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
          <h1 className="text-2xl font-bold text-gray-800">
            All <span className="text-blue-600">Booking</span> File
          </h1>
        </div>

        {/* Filters Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
          {/* Search Input */}
          <div className="relative sm:w-1/3 w-full">
            <Input
              placeholder="Search by name or passport..."
              className="pl-10 pr-4 py-2 rounded-sm border-gray-300 focus:ring-2 focus:ring-[#2E7270] focus:border-[#2E7270] transition-all"
            />
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />
          </div>

          {/* Filter Dropdowns */}
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="relative">
              <Input
                type="date"
                className="pl-10 pr-3 py-2 rounded-sm border-gray-300 focus:ring-2 focus:ring-[#2E7270] focus:border-[#2E7270] transition-all"
              />
              <Calendar
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              />
            </div>
            <Select>
              <SelectTrigger className="w-[160px]">
                <SelectValue placeholder="Filter by Visa" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="work">Work Visa</SelectItem>
                <SelectItem value="student">Student Visa</SelectItem>
                <SelectItem value="visit">Visit Visa</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className="w-[160px]">
                <SelectValue placeholder="Filter by Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="paid">Paid</SelectItem>
                <SelectItem value="unpaid">Unpaid</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Table */}
         <div className="overflow-x-auto rounded-sm border border-gray-200 w-full">
        <Table className="border ">
          <TableCaption>A list of your recent applications</TableCaption>
          <TableHeader className="bg-gray-100">
            <TableRow>
              <TableHead>Service Type</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Customer Name</TableHead>
              <TableHead>Passport no.</TableHead>
              <TableHead>Paid Amount</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            <TableRow>
              <TableCell className="inline-flex gap-2">
                <img
                  src={CountryFlag}
                  alt="flag"
                  className="aspect-video w-8"
                />
                Work Visa
              </TableCell>
              <TableCell>29 September 2025</TableCell>
              <TableCell>Ponting</TableCell>
              <TableCell>#SGDI67SDS</TableCell>
              <TableCell>4,00,000</TableCell>
              <TableCell className="text-red-600 font-bold">Reject</TableCell>

              {/* ✅ Fixed DropdownMenu (Shadcn UI) */}
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="rounded p-1 hover:bg-gray-100">
                      <MoreHorizontal className="w-5 h-5 text-gray-700" />
                    </button>
                  </DropdownMenuTrigger>

                  <DropdownMenuContent
                    align="end"
                    className="mx-auto w-44 bg-white shadow-md rounded-md border p-1 text-center"
                  >
                    <DropdownMenuItem className="cursor-pointer text-center">
                      View Details
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer text-center">
                      Edit Booking
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="inline-flex gap-2">
                <img
                  src={CountryFlag}
                  alt="flag"
                  className="aspect-video w-8"
                />
                Work Visa
              </TableCell>
              <TableCell>29 September 2025</TableCell>
              <TableCell>Ponting</TableCell>
              <TableCell>#SGDI67SDS</TableCell>
              <TableCell>4,00,000</TableCell>
              <TableCell className="text-red-600 font-bold">Reject</TableCell>

              {/* ✅ Fixed DropdownMenu (Shadcn UI) */}
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="rounded p-1 hover:bg-gray-100">
                      <MoreHorizontal className="w-5 h-5 text-gray-700" />
                    </button>
                  </DropdownMenuTrigger>

                  <DropdownMenuContent
                    align="end"
                    className="mx-auto w-44 bg-white shadow-md rounded-md border p-1 text-center"
                  >
                    <DropdownMenuItem className="cursor-pointer text-center">
                      View Details
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer text-center">
                      Edit Booking
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="inline-flex gap-2">
                <img
                  src={CountryFlag}
                  alt="flag"
                  className="aspect-video w-8"
                />
                Work Visa
              </TableCell>
              <TableCell>29 September 2025</TableCell>
              <TableCell>Ponting</TableCell>
              <TableCell>#SGDI67SDS</TableCell>
              <TableCell>4,00,000</TableCell>
              <TableCell className="text-red-600 font-bold">Reject</TableCell>

              {/* ✅ Fixed DropdownMenu (Shadcn UI) */}
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="rounded p-1 hover:bg-gray-100">
                      <MoreHorizontal className="w-5 h-5 text-gray-700" />
                    </button>
                  </DropdownMenuTrigger>

                  <DropdownMenuContent
                    align="end"
                    className="mx-auto w-44 bg-white shadow-md rounded-md border p-1 text-center"
                  >
                    <DropdownMenuItem className="cursor-pointer text-center">
                      View Details
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer text-center">
                      Edit Booking
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="inline-flex gap-2">
                <img
                  src={CountryFlag}
                  alt="flag"
                  className="aspect-video w-8"
                />
                Work Visa
              </TableCell>
              <TableCell>29 September 2025</TableCell>
              <TableCell>Ponting</TableCell>
              <TableCell>#SGDI67SDS</TableCell>
              <TableCell>4,00,000</TableCell>
              <TableCell className="text-red-600 font-bold">Reject</TableCell>

              {/* ✅ Fixed DropdownMenu (Shadcn UI) */}
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="rounded p-1 hover:bg-gray-100">
                      <MoreHorizontal className="w-5 h-5 text-gray-700" />
                    </button>
                  </DropdownMenuTrigger>

                  <DropdownMenuContent
                    align="end"
                    className="mx-auto w-44 bg-white shadow-md rounded-md border p-1 text-center"
                  >
                    <DropdownMenuItem className="cursor-pointer text-center">
                      View Details
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer text-center">
                      Edit Booking
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
         </div>

        {/* Pagination */}
        <div className="flex flex-col justify-end mt-6">
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

        {/* Buttons */}
        <div className="flex flex-col gap-2 w-2xs justify-end ml-auto mt-5">
          <Link
            className="hover:bg-primary/70 inline-flex gap-2"
            to={"/agent/dashboard/view-document"}
          >
            <Button className="w-full">
              View Documents <Eye />
            </Button>
          </Link>
          <Link
            className="hover:bg-primary/70 inline-flex gap-2"
            to={"/agent/dashboard/passport-retune"}
          >
            <Button className="w-full">Retune Passport</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

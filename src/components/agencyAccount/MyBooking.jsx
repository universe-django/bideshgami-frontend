import {
  Calendar,
  ChevronLeft,
  ChevronRight,
  EllipsisVertical,
  Search,
} from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "../ui/select";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "../ui/table";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "../ui/dropdown-menu";

export default function MyBooking() {
  return (
    <div className="bg-white shadow-sm rounded-2xl p-6 border border-gray-100 ">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 tracking-tight">
          Applied Customer List
        </h2>
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
        <Table className="min-w-full">
          <TableHeader className="bg-gray-100">
            <TableRow>
              <TableHead>Service Type</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Passport No.</TableHead>
              <TableHead>Paid Payment</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Document</TableHead>
              <TableHead className="text-center">Action</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            <TableRow className="hover:bg-gray-50 transition">
              <TableCell className="font-medium text-gray-800">
                Work Permit Visa
              </TableCell>
              <TableCell>01/09/25</TableCell>
              <TableCell>HR7879898</TableCell>
              <TableCell>0198787876</TableCell>
              <TableCell>Saudi → Dhaka</TableCell>
              <TableCell>2,90,000</TableCell>
              <TableCell className="text-center">
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <EllipsisVertical className="text-gray-600 hover:text-gray-800" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>View Post</DropdownMenuItem>
                    <DropdownMenuItem>Recieve Passport</DropdownMenuItem>
                    <DropdownMenuItem>Add Reminder</DropdownMenuItem>
                    <DropdownMenuItem>Reject</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>

            <TableRow className="hover:bg-gray-50 transition">
              <TableCell>01/09/25</TableCell>
              <TableCell className="font-medium text-gray-800">
                Mahmud Hasan
              </TableCell>
              <TableCell>HR7879898</TableCell>
              <TableCell>0198787876</TableCell>
              <TableCell>Saudi → Dhaka</TableCell>
              <TableCell>2,90,000</TableCell>
              <TableCell className="text-center">
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <EllipsisVertical className="text-gray-600 hover:text-gray-800" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>View</DropdownMenuItem>
                    <DropdownMenuItem>Edit</DropdownMenuItem>
                    <DropdownMenuItem>Delete</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between mt-6">
        <p className="text-sm text-gray-500">Showing 1–2 of 12 results</p>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            className="border-gray-300 text-gray-600 hover:bg-gray-100"
          >
            <ChevronLeft size={18} />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="border-gray-300 text-gray-600 hover:bg-gray-100"
          >
            <ChevronRight size={18} />
          </Button>
        </div>
      </div>
    </div>
  );
}

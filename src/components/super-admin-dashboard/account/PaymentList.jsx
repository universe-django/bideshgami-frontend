import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import {
  EllipsisVertical,
  Search,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function PaymentList() {
  return (
    <div className="bg-white shadow-sm rounded-2xl p-6 border border-gray-100">
      {/* Header Row */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 tracking-tight">
          Payment List
        </h2>
        <Button className="sm:w-auto w-full bg-gradient-to-r from-primary to-primary/80 text-white hover:opacity-90">
          + Create Payment
        </Button>
      </div>

      {/* Search Bar */}
      <div className="relative sm:w-1/3 w-full">
        <Input
          placeholder="Search payment..."
          className="pl-10 pr-4 py-2 rounded-sm border-gray-300 focus:ring-2 focus:ring-[#2E7270] focus:border-[#2E7270] transition-all"
        />
        <Search
          size={18}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-sm border border-gray-200 mt-5">
        <Table className="min-w-full">
          <TableHeader className="bg-gray-100">
            <TableRow>
              <TableHead className="w-12">
                <Checkbox className="border-gray-400" />
              </TableHead>
              <TableHead className="w-[70px] text-gray-700 font-semibold">
                Date
              </TableHead>
              <TableHead className="text-gray-700 font-semibold">
                Name
              </TableHead>
              <TableHead className="text-gray-700 font-semibold">
                Group Name
              </TableHead>
              <TableHead className="text-gray-700 font-semibold">
                Invoice
              </TableHead>
              <TableHead className="text-gray-700 font-semibold">
                Account
              </TableHead>
              <TableHead className="text-gray-700 font-semibold text-center">
                Payment Type
              </TableHead>
              <TableHead className="text-gray-700 font-semibold text-center">
                Amount
              </TableHead>
              <TableHead className="text-gray-700 font-semibold text-center">
                Action
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {[1, 2, 3, 4, 5].map((item, i) => (
              <TableRow key={i} className="hover:bg-gray-50 transition">
                <TableCell>
                  <Checkbox className="border-gray-400" />
                </TableCell>
                <TableCell>2025-10-0{i + 1}</TableCell>
                <TableCell className="font-medium text-gray-900">
                  Customer {i + 1}
                </TableCell>
                <TableCell>Group {i + 1}</TableCell>
                <TableCell>INV-{100 + i}</TableCell>
                <TableCell>AC-{200 + i}</TableCell>
                <TableCell className="text-center">
                  {i % 2 === 0 ? "Cash" : "Bank Transfer"}
                </TableCell>
                <TableCell className="text-center font-medium text-gray-700">
                  ${(5000 + i * 200).toLocaleString()}
                </TableCell>
                <TableCell className="text-center">
                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <EllipsisVertical className="text-gray-600" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem>View</DropdownMenuItem>
                      <DropdownMenuItem>Edit</DropdownMenuItem>
                      <DropdownMenuItem className="text-red-600">
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-6 gap-4">
        <p className="text-sm text-gray-600">
          Showing <span className="font-semibold text-gray-800">1–5</span> of{" "}
          <span className="font-semibold text-gray-800">25</span> results
        </p>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8 border-gray-300 text-gray-600 hover:bg-gray-100"
          >
            <ChevronLeft size={16} />
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="h-8 px-3 border-gray-300 bg-primary text-white hover:bg-[#285e5c]"
          >
            1
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="h-8 px-3 border-gray-300 text-gray-700 hover:bg-gray-100"
          >
            2
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="h-8 px-3 border-gray-300 text-gray-700 hover:bg-gray-100"
          >
            3
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8 border-gray-300 text-gray-600 hover:bg-gray-100"
          >
            <ChevronRight size={16} />
          </Button>
        </div>
      </div>
    </div>
  );
}

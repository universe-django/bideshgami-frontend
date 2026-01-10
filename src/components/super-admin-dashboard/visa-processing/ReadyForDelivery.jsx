import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ReadyForDelivery() {
  return (
    <div className="bg-white shadow-sm rounded-2xl p-6 border border-gray-100">
      <h2 className="text-2xl font-semibold text-gray-800 tracking-tight mb-4">
        Ready for Delivery
      </h2>

      {/* Table */}
      <div className="overflow-x-auto rounded-sm border border-gray-200">
        <Table className="min-w-full">
          <TableHeader className="bg-gray-100">
            <TableRow>
              <TableHead >Post ID</TableHead>
              <TableHead >Date & Time</TableHead>
              <TableHead >Customer Info</TableHead>
              <TableHead >From & To</TableHead>
              <TableHead >Service Type</TableHead>
              <TableHead >Paid Amount</TableHead>
              <TableHead >Invoice No</TableHead>
              <TableHead className="text-center">Action</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            <TableRow className="hover:bg-gray-50 transition">
              <TableCell>1df2035</TableCell>
              <TableCell className="font-medium text-gray-800">
                01-05-2025
                10:50 PM
              </TableCell>
              <TableCell>HR7879898</TableCell>

              <TableCell>Dhaka</TableCell>
              <TableCell>Dubai</TableCell>
              <TableCell>14,00,000</TableCell>

              <TableCell>08-08-2025</TableCell>

              <TableCell className="text-center">
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <EllipsisVertical className="text-gray-600 hover:text-gray-800" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem className="mb-1">
                      View Details
                    </DropdownMenuItem>
                    <DropdownMenuItem className="mb-1">
                      Success Flight
                    </DropdownMenuItem>
                    <DropdownMenuItem className="mb-1">
                      Return Passport
                    </DropdownMenuItem>
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
            2
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="border-gray-300 text-gray-600 hover:bg-gray-100"
          >
            3
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

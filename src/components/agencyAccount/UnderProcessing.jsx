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
import uploadIcon from "../../assets/uploadIcon.png";

export default function UnderProcessing() {
  return (
    <div className="bg-white shadow-sm rounded-2xl p-6 border border-gray-100">
      <h2 className="text-2xl font-semibold text-gray-800 tracking-tight mb-4">
        Under Processing
      </h2>

      <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
        {/* Search Input */}
        <div className="relative sm:w-1/3 w-full">
          <Input
            placeholder="Search by passport no"
            className="pl-10 pr-4 py-2 rounded-sm border-gray-300 focus:ring-2 focus:ring-[#2E7270] focus:border-[#2E7270] transition-all"
          />
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />
        </div>

        <div>
          <Input
            placeholder="From Date   To Date"
            type="date"
            className="pl-10 pr-4 py-2 rounded-sm border-gray-300 focus:ring-2 focus:ring-[#2E7270] focus:border-[#2E7270] transition-all"
          />
        </div>

        <div>
          <Select>
            <SelectTrigger className="w-[160px]">
              <SelectValue placeholder="All Booking File" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Booking File</SelectItem>
              <SelectItem value="paid">Paid</SelectItem>
              <SelectItem value="unpaid">Unpaid</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-sm border border-gray-200">
        <Table className="min-w-full">
          <TableHeader className="bg-gray-100">
            <TableRow>
              <TableHead >Apply Date</TableHead>
              <TableHead >Customer Name</TableHead>
              <TableHead >Passport No.</TableHead>
              <TableHead >From</TableHead>
              <TableHead >To</TableHead>
              <TableHead >Medical Expiry Date</TableHead>
              <TableHead >Police Clearance</TableHead>
              <TableHead >Expired DAte</TableHead>
              <TableHead >Receive Amount</TableHead>
              <TableHead className="text-center">Action</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            <TableRow className="hover:bg-gray-50 transition">
              <TableCell>17-03-2035</TableCell>
              <TableCell className="font-medium text-gray-800">
                Mahmud Hasan
              </TableCell>
              <TableCell>HR7879898</TableCell>

              <TableCell>Dhaka</TableCell>
              <TableCell>Dubai</TableCell>
              <TableCell>14,00,000</TableCell>

              <TableCell>08-08-2025</TableCell>
              <TableCell>08-08-2025</TableCell>
              <TableCell>14,00,000</TableCell>

              <TableCell className="text-center">
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <EllipsisVertical className="text-gray-600 hover:text-gray-800" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem className="mb-1">
                      Visa Approved
                    </DropdownMenuItem>
                    <DropdownMenuItem className="mb-1">
                      <div className="w-full border border-dotted border-black flex flex-col items-center justify-center h-10 rounded-md bg-blue-100">
                        <img src={uploadIcon} alt="" className="h-8" />
                      </div>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="mb-1">
                      Upload Documents
                    </DropdownMenuItem>
                    <DropdownMenuItem className="mb-1">
                      Update Remainder
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

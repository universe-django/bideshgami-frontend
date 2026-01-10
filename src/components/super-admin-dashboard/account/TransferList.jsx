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

const transferData = [
  {
    fromAccount: "City Bank - Soft Tech Ltd.",
    toAccount: "BRAC Bank - Universe IT",
    referenceNumber: "REF-2025101201",
    initialBalance: "50,000 BDT",
    transitionId: "TXN-9876543210",
  },
  {
    fromAccount: "Islami Bank - Rooter King",
    toAccount: "Prime Bank - Quantum Properties",
    referenceNumber: "REF-2025101202",
    initialBalance: "30,000 BDT",
    transitionId: "TXN-8765432109",
  },
  {
    fromAccount: "Dutch Bangla Bank - Abinas Foundation",
    toAccount: "City Bank - Soft Tech Ltd.",
    referenceNumber: "REF-2025101203",
    initialBalance: "75,000 BDT",
    transitionId: "TXN-7654321098",
  },
  {
    fromAccount: "Prime Bank - Bideshgami Travel",
    toAccount: "Islami Bank - Universe IT",
    referenceNumber: "REF-2025101204",
    initialBalance: "1,20,000 BDT",
    transitionId: "TXN-6543210987",
  },
];

export default function TransferList() {
  return (
    <div className="bg-white shadow-sm rounded-2xl p-6 border border-gray-100">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 tracking-tight">
          Transfer List
        </h2>
        <Button className="sm:w-auto w-full bg-gradient-to-r from-primary to-primary/80 text-white hover:opacity-90">
          + Create Transfer
        </Button>
      </div>

      {/* Search Bar */}
      <div className="relative sm:w-1/3 w-full">
        <Input
          placeholder="Search by account or reference..."
          className="pl-10 pr-4 py-2 rounded-sm border-gray-300 focus:ring-2 focus:ring-[#2E7270] focus:border-[#2E7270] transition-all"
        />
        <Search
          size={18}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
        />
      </div>

      {/* Table Section */}
      <div className="overflow-x-auto rounded-sm border border-gray-200 mt-5">
        <Table className="min-w-full">
          <TableHeader className="bg-gray-100">
            <TableRow>
              <TableHead className="text-gray-700 font-semibold">
                From Account
              </TableHead>
              <TableHead className="text-gray-700 font-semibold">
                To Account
              </TableHead>
              <TableHead className="text-gray-700 font-semibold">
                Reference Number
              </TableHead>
              <TableHead className="text-gray-700 font-semibold">
                Initial Balance
              </TableHead>
              <TableHead className="text-gray-700 font-semibold">
                Transition ID
              </TableHead>
              <TableHead className="text-gray-700 font-semibold text-center">
                Action
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {transferData.map((data, index) => (
              <TableRow key={index} className="hover:bg-gray-50 transition">
                <TableCell className="font-medium text-gray-800">
                  {data.fromAccount}
                </TableCell>
                <TableCell>{data.toAccount}</TableCell>
                <TableCell>{data.referenceNumber}</TableCell>
                <TableCell>{data.initialBalance}</TableCell>
                <TableCell>{data.transitionId}</TableCell>
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
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Pagination Section */}
      <div className="flex items-center justify-between mt-6">
        <p className="text-sm text-gray-500">Showing 1–4 of 20 results</p>
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
            className="border-gray-300 text-gray-600 hover:bg-gray-100"
          >
            <ChevronRight size={18} />
          </Button>
        </div>
      </div>
    </div>
  );
}

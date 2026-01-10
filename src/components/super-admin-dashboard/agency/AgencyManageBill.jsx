import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
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
import { EllipsisVertical, Search } from "lucide-react";
import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
const agencyBillData = [
  {
    id: 1,
    agencyName: "Global Recruiters Ltd.",
    billDate: "2025-09-12",
    dueDate: "2025-10-12",
    postId: "POST-2025-001",
    invoiceNo: "INV-2301",
    status: "Paid",
  },
  {
    id: 2,
    agencyName: "Bright Future Agency",
    billDate: "2025-09-20",
    dueDate: "2025-10-20",
    postId: "POST-2025-002",
    invoiceNo: "INV-2302",
    status: "Pending",
  },
  {
    id: 3,
    agencyName: "Star Overseas Ltd.",
    billDate: "2025-09-25",
    dueDate: "2025-10-25",
    postId: "POST-2025-003",
    invoiceNo: "INV-2303",
    status: "Overdue",
  },
  {
    id: 4,
    agencyName: "SkyLink Travels & Agency",
    billDate: "2025-09-30",
    dueDate: "2025-10-30",
    postId: "POST-2025-004",
    invoiceNo: "INV-2304",
    status: "Paid",
  },
  {
    id: 5,
    agencyName: "DreamLine Recruitment",
    billDate: "2025-10-01",
    dueDate: "2025-10-15",
    postId: "POST-2025-005",
    invoiceNo: "INV-2305",
    status: "Pending",
  },
];

export default function AgencyManageBill() {
  return (
    <div className="bg-white shadow-sm rounded-2xl p-6 border border-gray-100">
      {/* Header Row */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 tracking-tight">
          Manage Bill
        </h2>
        <Button className="sm:w-auto w-full bg-gradient-to-r from-[#2E7270] to-[#4d6980] text-white hover:opacity-90">
          + Add Bill
        </Button>
      </div>

      {/* Search Bar */}
      <div className="relative sm:w-1/3 w-full">
        <Input
          placeholder="Search bills..."
          className="pl-10 pr-4 py-2 rounded-sm border-gray-300 focus:ring-2 focus:ring-[#2E7270] focus:border-[#2E7270] transition-all"
        />
        <Search
          size={18}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
        />
      </div>

      <div className="overflow-x-auto rounded-sm border border-gray-200 mt-5">
        <Table className="min-w-full">
          <TableHeader className="bg-gray-100">
            <TableRow>
              <TableHead className="w-12">
                <Checkbox className="border-gray-400" />
              </TableHead>
              <TableHead className="w-[70px] text-gray-700 font-semibold">
                SL No.
              </TableHead>
              <TableHead className="text-gray-700 font-semibold">
                Agency Name
              </TableHead>
              <TableHead className="text-gray-700 font-semibold">
                Bill Date
              </TableHead>
              <TableHead className="text-gray-700 font-semibold">
                Due Date
              </TableHead>
              <TableHead className="text-gray-700 font-semibold">
                Post ID
              </TableHead>
              <TableHead className="text-gray-700 font-semibold text-center">
                Invoice No
              </TableHead>
              <TableHead className="text-gray-700 font-semibold text-center">
                Status
              </TableHead>
              <TableHead className="text-gray-700 font-semibold text-center">
                Action
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {agencyBillData.map((data) => (
              <TableRow key={data.id} className="hover:bg-gray-50 transition">
                <TableCell>
                  <Checkbox className="border-gray-400" />
                </TableCell>
                <TableCell>{data.id}</TableCell>
                <TableCell className="font-medium text-gray-900">
                  {data.agencyName}
                </TableCell>
                <TableCell>{data.billDate}</TableCell>
                <TableCell>{data.dueDate}</TableCell>
                <TableCell>{data.postId}</TableCell>
                <TableCell>{data.invoiceNo}</TableCell>

                <TableCell>
                  <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-700">
                    {data.status}
                  </span>
                </TableCell>
                <TableCell className="text-center">
                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <EllipsisVertical className="text-gray-600" />
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
    </div>
  );
}

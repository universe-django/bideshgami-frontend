import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { EllipsisVertical } from "lucide-react";

const debitVoucherData = [
  {
    date: "07-06-2025",
    accountName: "City Bank",
    particular: "Accountant",
    paymentMethod: "Cash",
    serviceType: "Work permit",
    amount: "৳ 58,45,255",
    reference: "A-1236455",
  },
  {
    date: "08-06-2025",
    accountName: "Dutch Bangla Bank",
    particular: "Consultant",
    paymentMethod: "Bank Transfer",
    serviceType: "Student Visa",
    amount: "৳ 22,00,500",
    reference: "A-1236460",
  },
  {
    date: "09-06-2025",
    accountName: "Sonali Bank",
    particular: "Finance Dept.",
    paymentMethod: "Cheque",
    serviceType: "Medical Visa",
    amount: "৳ 10,75,000",
    reference: "A-1236467",
  },
];

export default function VoucherListDV() {
  return (
    <div className="bg-white shadow-sm rounded-2xl p-6 border border-gray-100">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 tracking-tight">
          Debit Voucher List
        </h2>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white">
          + Create Voucher
        </Button>
      </div>

      {/* Table Section */}
      <div className="overflow-x-auto rounded-sm border border-gray-200 mt-5">
        <Table className="min-w-full">
          <TableHeader className="bg-gray-100">
            <TableRow>
              <TableHead className="w-12">
                <Checkbox className="border-gray-400" />
              </TableHead>
              <TableHead className="text-gray-700 font-semibold">
                Date
              </TableHead>
              <TableHead className="text-gray-700 font-semibold">
                Account Name
              </TableHead>
              <TableHead className="text-gray-700 font-semibold">
                Particular
              </TableHead>
              <TableHead className="text-gray-700 font-semibold">
                Payment Method
              </TableHead>
              <TableHead className="text-gray-700 font-semibold">
                Service Type
              </TableHead>
              <TableHead className="text-gray-700 font-semibold text-right">
                Amount
              </TableHead>
              <TableHead className="text-gray-700 font-semibold text-center">
                Reference
              </TableHead>
              <TableHead className="text-gray-700 font-semibold text-center">
                Action
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {debitVoucherData.map((data, index) => (
              <TableRow key={index} className="hover:bg-gray-50 transition">
                <TableCell>
                  <Checkbox className="border-gray-400" />
                </TableCell>
                <TableCell>{data.date}</TableCell>
                <TableCell>{data.accountName}</TableCell>
                <TableCell>{data.particular}</TableCell>
                <TableCell>{data.paymentMethod}</TableCell>
                <TableCell>{data.serviceType}</TableCell>
                <TableCell className="text-right">{data.amount}</TableCell>
                <TableCell className="text-center text-green-600 font-medium">
                  {data.reference}
                </TableCell>
                <TableCell className="text-center">
                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <EllipsisVertical className="text-gray-600 hover:text-gray-800" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem>View Details</DropdownMenuItem>
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

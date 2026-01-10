import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@radix-ui/react-checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Label,
} from "@radix-ui/react-dropdown-menu";
import { EllipsisVertical, Search } from "lucide-react";
import { Link } from "react-router";

const tableData = [
  {
    postId: "PST001",
    date: "2025-10-10",
    customerName: "Md. Mahamudul Hasan",
    fromTo: "Dhaka → Riyadh",
    visaType: "Work Visa",
    rlNo: "RL12345",
    paidAmount: 250,
    invoiceNo: "INV001",
  },
  {
    postId: "PST002",
    date: "2025-10-11",
    customerName: "Fatima Noor",
    fromTo: "Chittagong → Jeddah",
    visaType: "Student Visa",
    rlNo: "RL12346",
    paidAmount: 300,
    invoiceNo: "INV002",
  },
  {
    postId: "PST003",
    date: "2025-10-12",
    customerName: "Aminul Islam",
    fromTo: "Sylhet → Mecca",
    visaType: "Hajj Visa",
    rlNo: "RL12347",
    paidAmount: 500,
    invoiceNo: "INV003",
  },
  {
    postId: "PST004",
    date: "2025-10-13",
    customerName: "Sadia Akter",
    fromTo: "Dhaka → Jeddah",
    visaType: "Umrah Visa",
    rlNo: "RL12348",
    paidAmount: 400,
    invoiceNo: "INV004",
  },
  {
    postId: "PST005",
    date: "2025-10-13",
    customerName: "Rashed Khan",
    fromTo: "Khulna → Riyadh",
    visaType: "Work Visa",
    rlNo: "RL12349",
    paidAmount: 250,
    invoiceNo: "INV005",
  },
];

export default function SendToAgencyHUB() {
  return (
    <div className="bg-white shadow-sm rounded-2xl p-6 border border-gray-100">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 tracking-tight">
          Collected Passport
        </h2>
      </div>

      {/* Search Bar */}
      <div className="relative sm:w-1/3 w-full">
        <Input
          placeholder="Search by postId or Invoice no..."
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
              <TableHead className="w-12">
                <Checkbox className="border-gray-400" />
              </TableHead>
              <TableHead className="text-gray-700 font-semibold">
                Post Id
              </TableHead>
              <TableHead className="text-gray-700 font-semibold">
                Date
              </TableHead>
              <TableHead className="text-gray-700 font-semibold">
                Customer Name
              </TableHead>
              <TableHead className="text-gray-700 font-semibold">
                from to
              </TableHead>
              <TableHead className="text-gray-700 font-semibold">
                Type of Visa
              </TableHead>
              <TableHead className="text-gray-700 font-semibold text-center">
                RL No.
              </TableHead>
              <TableHead className="text-gray-700 font-semibold text-center">
                Paid Ammount
              </TableHead>
              <TableHead className="text-gray-700 font-semibold text-center">
                Invoice No.
              </TableHead>
              <TableHead className="text-gray-700 font-semibold text-center">
                Action
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {tableData.map((data, index) => (
              <TableRow key={index} className="hover:bg-gray-50 transition">
                <TableCell className="w-12">
                  <Checkbox className="border-gray-400" />
                </TableCell>
                <TableCell className="font-medium text-gray-800">
                  {data.postId}
                </TableCell>
                <TableCell>{data.date}</TableCell>
                <TableCell>{data.customerName}</TableCell>
                <TableCell>{data.fromTo}</TableCell>
                <TableCell>{data.visaType}</TableCell>
                <TableCell>{data.rlNo}</TableCell>
                <TableCell>{data.paidAmount}</TableCell>
                <TableCell>{data.invoiceNo}</TableCell>
                <TableCell className="text-center">
                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <EllipsisVertical className="text-gray-600 hover:text-gray-800" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem>View Details</DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link to="send-to-agency">Send To Agency</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>Return passport</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="mt-8">
        <h3 className="text-center font-bold tracking-tight text-2xl mb-8">
          Passport Receiver Information
        </h3>
        <form>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <Label className="font-semibold text-gray-700">
                Enter Full Name
              </Label>
              <Input
                type="text"
                placeholder="Enter Full Name"
                className="mt-1 border-gray-300 focus:ring-2 focus:ring-[#2E7270] focus:border-[#2E7270] transition-all"
              />
            </div>
            <div>
              <Label className="font-semibold text-gray-700">
                Enter Phone Number
              </Label>
              <Input
                type="text"
                placeholder="Enter Phone Number"
                className="mt-1 border-gray-300 focus:ring-2 focus:ring-[#2E7270] focus:border-[#2E7270] transition-all"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <Label className="font-semibold text-gray-700">
                ID card Number
              </Label>
              <Input
                type="text"
                placeholder=" ID card Number"
                className="mt-1 border-gray-300 focus:ring-2 focus:ring-[#2E7270] focus:border-[#2E7270] transition-all"
              />
            </div>
            <div>
              <Label className="font-semibold text-gray-700">Enter Email</Label>
              <Input
                type="text"
                placeholder="Enter Email..."
                className="mt-1 border-gray-300 focus:ring-2 focus:ring-[#2E7270] focus:border-[#2E7270] transition-all"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <Label className="font-semibold text-gray-700">Employee of</Label>
              <Input
                type="text"
                placeholder="Employee of"
                className="mt-1 border-gray-300 focus:ring-2 focus:ring-[#2E7270] focus:border-[#2E7270] transition-all"
              />
            </div>
          </div>
          <Button className="bg-primary hover:bg-primary/90 text-white font-semibold px-6 py-2 rounded-md">
            Send
          </Button>
        </form>
      </div>
    </div>
  );
}

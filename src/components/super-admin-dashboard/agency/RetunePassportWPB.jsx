import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";

const data = [
  {
    id: "BG 01",
    date: "01-05-2025 10:50 PM",
    customer: {
      name: "Mahamudul Hasan Fahad",
      passport: "A12234564",
      phone: "01816346393",
      from: "Dhaka",
      to: "Saudi Arabia",
    },
    service: "Work Permit",
    rlNumber: "RL-12456",
    amount: "54862 BDT",
    invoice: "#Invoice:12342",
  },
  {
    id: "BG 01",
    date: "01-05-2025 10:50 PM",
    customer: {
      name: "Mahamudul Hasan Fahad",
      passport: "A12234564",
      phone: "01816346393",
      from: "Dhaka",
      to: "Saudi Arabia",
    },
    service: "Work Permit",
    rlNumber: "RL-12456",
    amount: "54862 BDT",
    invoice: "#Invoice:12342",
  },
  {
    id: "BG 01",
    date: "01-05-2025 10:50 PM",
    customer: {
      name: "Mahamudul Hasan Fahad",
      passport: "A12234564",
      phone: "01816346393",
      from: "Dhaka",
      to: "Saudi Arabia",
    },
    service: "Work Permit",
    rlNumber: "RL-12456",
    amount: "54862 BDT",
    invoice: "#Invoice:12342",
  },
  // Repeat or map more rows as needed
];

export default function RetunePassportWPB() {
  return (
    <div className="bg-gray-100 w-full">
      <div className="p-6 rounded-lg bg-white">
        <h2 className="text-2xl font-semibold text-gray-800 tracking-tight mb-4">
          Retune Passport
        </h2>

        <div className="overflow-x-auto rounded-sm border border-gray-200 w-full">
          <Table className="min-w-full">
            <TableHeader className="bg-gray-100 ">
              <TableRow className={""}>
                <TableHead>Post ID</TableHead>
                <TableHead>Date & Time</TableHead>
                <TableHead>Customer Info</TableHead>
                <TableHead>From & To</TableHead>
                <TableHead>Service Type</TableHead>
                <TableHead>RL Number</TableHead>
                <TableHead>Paid Amount</TableHead>
                <TableHead>Invoice No</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className={"font-semibold text-gray-500"}>
              {data.map((row, index) => (
                <TableRow key={index} className="hover:bg-gray-50">
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.date}</TableCell>
                  <TableCell>
                    {row.customer.name}
                    <br />
                    Passport No: {row.customer.passport}
                    <br />
                    Phone No: {row.customer.phone}
                  </TableCell>
                  <TableCell>
                    {row.customer.from} <br /> {row.customer.to}
                  </TableCell>
                  <TableCell>{row.service}</TableCell>
                  <TableCell>{row.rlNumber}</TableCell>
                  <TableCell>{row.amount}</TableCell>
                  <TableCell>{row.invoice}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <button className=" rounded hover:bg-gray-100 ">
                          <MoreHorizontal />
                        </button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-44 space-y-2 me-2 p-2">
                        <DropdownMenuItem className="cursor-pointer text-black text-center">
                          View Details
                        </DropdownMenuItem>
                        <DropdownMenuItem className="cursor-pointer text-black text-center">
                          View Reson
                        </DropdownMenuItem>
                        <DropdownMenuItem className="cursor-pointer text-black text-center">
                          View Documents
                        </DropdownMenuItem>
                        <DropdownMenuItem className="cursor-pointer text-black text-center">
                          Retrun Passport
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}

import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuTrigger,
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
import { EllipsisVertical } from "lucide-react";

const bankData = [
  {
    bankName: "City Bank",
    branch: "Banani",
    accountNo: "1234567890",
    accountName: "Soft Tech Ltd.",
    phone: "+8801712345678",
    balance: "50,000 BDT",
    status: "Active",
  },
  {
    bankName: "BRAC Bank",
    branch: "Gulshan",
    accountNo: "9876543210",
    accountName: "Universe IT",
    phone: "+8801999888777",
    balance: "75,000 BDT",
    status: "Active",
  },
  {
    bankName: "Islami Bank",
    branch: "Dhanmondi",
    accountNo: "1122334455",
    accountName: "Rooter King",
    phone: "+8801788996655",
    balance: "30,000 BDT",
    status: "Inactive",
  },
];

export default function BankList() {
  return (
    <>
      <Table>
        <TableHeader className="bg-gray-200">
          <TableRow>
            <TableHead>Bank Name</TableHead>
            <TableHead>Branch</TableHead>
            <TableHead>Account No</TableHead>
            <TableHead>Account Name</TableHead>
            <TableHead>Phone No</TableHead>
            <TableHead>Inital Balance</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {bankData.map((data, index) => (
            <TableRow key={index}>
              <TableCell>{data.bankName}</TableCell>
              <TableCell>{data.branch}</TableCell>
              <TableCell>{data.accountNo}</TableCell>
              <TableCell>{data.accountName}</TableCell>
              <TableCell>{data.phone}</TableCell>
              <TableCell>{data.balance}</TableCell>
              <TableCell>{data.status}</TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <EllipsisVertical />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>View</DropdownMenuItem>
                    <DropdownMenuItem>Delete</DropdownMenuItem>
                    <DropdownMenuItem>Edit</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}

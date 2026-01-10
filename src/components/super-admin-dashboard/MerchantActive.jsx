import { EllipsisVertical } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

export default function MerchantActive() {
  return (
    <div>
      {" "}
      <Table>
        <TableHeader className="bg-gray-200">
          <TableRow>
            <TableHead>SL No.</TableHead>
            <TableHead>Merchant Name</TableHead>
            <TableHead>Phone No.</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>01</TableCell>
            <TableCell>Mahmud Hasan</TableCell>

            <TableCell>01987878787</TableCell>
            <TableCell>merchant@gmail.com</TableCell>
            <TableCell>active</TableCell>

            <TableCell>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <EllipsisVertical />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="flex flex-col items-start ">
                  <DropdownMenuItem className="w-full">View</DropdownMenuItem>
                  <DropdownMenuItem className="w-full">Delete</DropdownMenuItem>
                  <DropdownMenuItem className="w-full">Edit</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}

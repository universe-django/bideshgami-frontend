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

export default function RejectPost() {
  return (
    <div>
      {" "}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>SL No.</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>image</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>01</TableCell>
            <TableCell>Work Permit Visa</TableCell>

            <TableCell>Url</TableCell>

            <TableCell>Rejected</TableCell>

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

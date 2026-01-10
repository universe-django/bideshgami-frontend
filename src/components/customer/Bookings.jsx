import React from "react";
import {
  Table,
  TableCaption,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "../ui/table";
import { EllipsisVertical } from "lucide-react";
import { Button } from "../ui/button";
import CountryFlag from "../../assets/colombia.png";
import { Eye } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../ui/pagination";
export default function Bookings() {
  return (
    <>
      <Table>
        <TableCaption>A list of you're recent applied </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Service Type</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Customer Name</TableHead>
            <TableHead>Passport no.</TableHead>
            <TableHead>Paid Ammount</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="inline-flex gap-2">
              <img src={CountryFlag} alt="flag" className="aspect-video w-8" />
              Work Visa
            </TableCell>
            <TableCell>29 September 2025</TableCell>
            <TableCell>Ponting</TableCell>
            <TableCell>#SGDI67SDS</TableCell>
            <TableCell>4,00,000</TableCell>
            <TableCell className="text-red-600 font-bold">Reject</TableCell>
            <TableCell>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <EllipsisVertical />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="flex flex-col items-start gap-3">
                  <Button className="bg-transparent text-emerald-500 font-semibold hover:bg-blue-50 w-full">
                    View
                  </Button>
                  <Button className="bg-transparent text-red-500 font-semibold hover:bg-blue-50 w-full">
                    Delete
                  </Button>
                  <Button className="bg-transparent text-blue-500 font-semibold hover:bg-blue-50 w-full">
                    Edit
                  </Button>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="inline-flex gap-2">
              <img src={CountryFlag} alt="flag" className="aspect-video w-8" />
              Work Visa
            </TableCell>
            <TableCell>29 September 2025</TableCell>
            <TableCell>Ponting</TableCell>
            <TableCell>#SGDI67SDS</TableCell>
            <TableCell>4,00,000</TableCell>
            <TableCell className="text-green-600 font-bold">Success</TableCell>
            <TableCell>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <EllipsisVertical />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="flex flex-col items-start gap-3">
                  <Button className="bg-transparent text-emerald-500 font-semibold hover:bg-blue-50 w-full">
                    View
                  </Button>
                  <Button className="bg-transparent text-red-500 font-semibold hover:bg-blue-50 w-full">
                    Delete
                  </Button>
                  <Button className="bg-transparent text-blue-500 font-semibold hover:bg-blue-50 w-full">
                    Edit
                  </Button>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <div className="flex flex-col justify-end">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>

            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
      <div className="flex flex-col gap-2 w-2xs justify-end  ml-auto mt-5">
        <Button className=" hover:bg-primary/70 ">Return Passport</Button>
        <Button className=" hover:bg-primary/70 inline-flex gap-2">
          View Documents <Eye />
        </Button>
      </div>
    </>
  );
}

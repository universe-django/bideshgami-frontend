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
import { Button } from "../ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../ui/pagination";
export default function AppointmentBooking() {
  return (
    <>
      <Table>
        <TableCaption>A list of you're recent applied </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>SL No.</TableHead>
            <TableHead>Full Name</TableHead>
            <TableHead>Country Name</TableHead>
            <TableHead>Visa Category</TableHead>
            <TableHead>Meeting</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Overview</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>1</TableCell>
            <TableCell>Mahmud Hasan</TableCell>
            <TableCell>Malaysia</TableCell>
            <TableCell>Work Visa</TableCell>
            <TableCell>Physical</TableCell>
            <TableCell className="font-medium">
              17.04.2025 (2:30 PM - 3:00 PM)
            </TableCell>
            <TableCell>
              <Button className=" font-semibold hover:bg-blue-500 w-full">
                View
              </Button>
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
    </>
  );
}

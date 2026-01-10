import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../ui/pagination";

import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function PaymentsDetails() {
  const payments = [
    {
      id: 1,
      invoice: "Invoice Number#100012",
      date: "June 12-14, 2020",
      passport: "A20503322",
      amount: "10,000",
      status: "Success",
    },
    {
      id: 2,
      invoice: "Invoice Number#100013",
      date: "June 12-14, 2020",
      passport: "A20503332",
      amount: "10,000",
      status: "Return",
    },
    {
      id: 3,
      invoice: "Invoice Number#100014",
      date: "June 12-14, 2020",
      passport: "A20503342",
      amount: "10,000",
      status: "Success",
    },
    {
      id: 4,
      invoice: "Invoice Number#100015",
      date: "June 12-14, 2020",
      passport: "A20503352",
      amount: "10,000",
      status: "Success",
    },
  ];

  return (
    <div className="p-6 rounded-2xl space-y-6 w-full bg-white">
      {/* Header */}
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="">
          <h1 className="text-2xl font-semibold text-gray-800">
            Payments Details
          </h1>
          <p className="text-gray-500 text-sm mt-1">
            Update your payment information or change your plans according to
            your needs.
          </p>
        </div>

        {/* Payment Summary */}
        <div className="bg-white p-6 rounded-lg ">
          <p className="text-xl font-semibold mb-5">Payment summary</p>
          <div className="grid grid-cols-1 bg-white md:grid-cols-4 gap-4">
            <Card className="bg-blue-600 text-white shadow-md">
              <CardContent className="p-4">
                <p className="text-sm">Total Amount</p>
                <h2 className="text-xl font-bold">BDT 110,000 Tk</h2>
              </CardContent>
            </Card>

            <Card className="bg-green-600 text-white shadow-md">
              <CardContent className="p-4">
                <p className="text-sm">Paid Amount</p>
                <h2 className="text-xl font-bold">BDT 10,000 Tk</h2>
              </CardContent>
            </Card>

            <Card className="bg-red-600 text-white shadow-md">
              <CardContent className="p-4">
                <p className="text-sm">Due Amount</p>
                <h2 className="text-xl font-bold">BDT 100,000 Tk</h2>
              </CardContent>
            </Card>

            <Card className="bg-yellow-500 text-white shadow-md">
              <CardContent className="p-4">
                <p className="text-sm">Return Amount</p>
                <h2 className="text-xl font-bold">BDT 100,000 Tk</h2>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Payment History */}
        <div className="mt-6">
          <h2 className="text-lg font-semibold text-gray-800">
            Payment History
            <span className="text-gray-500 text-sm ml-1">(20)</span>
          </h2>
          <p className="text-gray-500 text-sm mb-4">
            See history of your payment plan invoice
          </p>

          {/* Filters */}
          <div className="flex flex-col md:flex-row items-center gap-3 mb-4">
            <Input
              placeholder="Search by Passport No."
              className="w-full md:w-1/3"
            />
            <div className="flex items-center gap-2 w-full md:w-1/3">
              <Input type="date" className="w-1/2" />
              <Input type="date" className="w-1/2" />
            </div>
            <Select>
              <SelectTrigger className="w-full md:w-1/3">
                <SelectValue placeholder="All Payment Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="success">Success</SelectItem>
                <SelectItem value="return">Return</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Table */}
          <Card className="shadow-sm">
            <CardContent className="p-0">
              <Table>
                <TableHeader className="bg-gray-100">
                  <TableRow>
                    <TableHead className="w-[40px]">
                      <Checkbox />
                    </TableHead>
                    <TableHead>Payment Invoice</TableHead>
                    <TableHead>Payment Date</TableHead>
                    <TableHead>Passport No</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {payments.map((p) => (
                    <TableRow key={p.id} className="hover:bg-gray-50">
                      <TableCell>
                        <Checkbox />
                      </TableCell>
                      <TableCell>{p.invoice}</TableCell>
                      <TableCell>{p.date}</TableCell>
                      <TableCell>{p.passport}</TableCell>
                      <TableCell>{p.amount}</TableCell>
                      <TableCell>
                        <span
                          className={`px-2 py-1 rounded-md text-xs font-medium ${
                            p.status === "Success"
                              ? "bg-green-100 text-green-700"
                              : "bg-yellow-100 text-yellow-700"
                          }`}
                        >
                          {p.status}
                        </span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
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
      </div>
    </div>
  );
}

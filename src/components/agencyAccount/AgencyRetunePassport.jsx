import React, { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Search, Calendar, ChevronDown } from "lucide-react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Button } from "@/components/ui/button";
import { Eye } from "@/utils/svg-utils";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";

export default function AgencyRetunePassport() {
  const [showModal, setShowModal] = useState(false);

  const data = [
    {
      applyDate: "16-04-2024",
      name: "Md.Mahamudul Hasan Fahad",
      passport: "A00009020",
      from: "Dhaka",
      to: "Malaysia",
      totalCost: "15,00,000",
      totalPaid: "15,00,000",
      flightDate: "02-05-2026",
      status: "Flight Successful",
    },
    {
      applyDate: "16-04-2024",
      name: "Md.Mahamudul Hasan Fahad",
      passport: "A00009020",
      from: "Dhaka",
      to: "Malaysia",
      totalCost: "15,00,000",
      totalPaid: "15,00,000",
      flightDate: "02-05-2026",
      status: "Flight Successful",
    },
  ];

  return (
   <div className="bg-white rounded-2xl p-4 sm:p-6 w-full">
      {/* Shadcn Dialog Modal */}
      <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogContent className="sm:max-w-lg bg-gray-100">
          <DialogHeader>
            <DialogTitle className="text-center text-lg font-semibold text-black">
              নথি অসম্পূর্ণ বা অনুপস্থিত
            </DialogTitle>
            <DialogDescription className="text-center text-gray-700 text-base leading-relaxed">
              “আপনার পাসপোর্ট আবেদনটি বাতিল করা হয়েছে কারণ প্রয়োজনীয় কাগজপত্র
              অসম্পূর্ণ বা অনুপস্থিত। অনুগ্রহ করে সকল প্রয়োজনীয় নথি যথাযথভাবে
              জমা দিন।”
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="flex justify-center mt-4">
            <Button
              onClick={() => setShowModal(false)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6"
            >
              OK
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* <div className="flex-1 bg-white rounded-2xl p-4 sm:p-6 w-full"> */}
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <h1 className="text-2xl font-bold text-gray-800">
              Return Passport
            </h1>
          </div>

          {/* Filters */}
          <div className="mb-6 flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <div className="flex-1 relative w-full sm:w-auto">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search by Passport No"
                className="w-full sm:w-64 pl-10 pr-4 py-2.5 border border-gray-300 rounded text-sm focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="flex items-center gap-2 px-4 py-2.5 border border-gray-300 rounded bg-white cursor-pointer hover:border-blue-500 transition">
              <span className="text-sm text-gray-600">From Date</span>
              <Calendar className="w-4 h-4 text-gray-400" />
              <span className="text-sm text-gray-600">To Date</span>
            </div>

            <div className="flex items-center gap-2 px-4 py-2.5 border border-gray-300 rounded bg-white cursor-pointer hover:border-blue-500 transition">
              <span className="text-sm font-medium">All Booking File</span>
              <ChevronDown className="w-4 h-4 text-gray-600" />
            </div>
          </div>

          {/* Table */}
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-100">
                <TableHead >Apply Date</TableHead>
                <TableHead >Customer Name</TableHead>
                <TableHead >Passport No</TableHead>
                <TableHead >From</TableHead>
                <TableHead >To</TableHead>
                <TableHead >Total Cost</TableHead>
                <TableHead >Total Paid</TableHead>
                <TableHead className="text-center">Action</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {data.map((item, i) => (
                <TableRow key={i} className="hover:bg-gray-50">
                  <TableCell>
                    <Checkbox />
                    {item.applyDate}
                  </TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.passport}</TableCell>
                  <TableCell>{item.from}</TableCell>
                  <TableCell>{item.to}</TableCell>
                  <TableCell>{item.totalCost}</TableCell>
                  <TableCell>{item.totalPaid}</TableCell>
                  <TableCell className="text-center">
                    <Button variant="secondary" size="sm" className="me-2 text-xs">
                      Return Accept
                    </Button>
                    <Button
                      variant="secondary"
                      onClick={() => setShowModal(true)}
                      size="sm"
                      className="text-xs"
                    >
                      See Reason <Eye />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          {/* Pagination */}
          <div className="flex flex-col justify-end mt-5">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">
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
      {/* </div> */}
    </div>
  );
}

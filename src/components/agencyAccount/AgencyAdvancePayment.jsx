import { Button } from "@/components/ui/button";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function AgencyAdvancePayment() {
  return (
    <div className="bg-white shadow-sm rounded-2xl p-6 border border-gray-100">
      <h2 className="text-2xl font-semibold text-gray-800 tracking-tight mb-4">
        Advance Payment
      </h2>

      {/* Table */}
      <div className="overflow-x-auto rounded-sm border border-gray-200">
        <Table className="min-w-full">
          <TableHeader className="bg-gray-100">
            <TableRow>
              <TableHead >Post Id</TableHead>
              <TableHead >Customer Id</TableHead>
             
              <TableHead >Advacne</TableHead>
              <TableHead >Paid</TableHead>
              <TableHead >Status</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            <TableRow className="hover:bg-gray-50 transition">
              <TableCell>174f2035</TableCell>
              <TableCell className="font-medium text-gray-800">
                kdkfleet
              </TableCell>
             
              <TableCell>979</TableCell>
              <TableCell>988</TableCell>
              <TableCell>unpaid</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between mt-6">
        <p className="text-sm text-gray-500">Showing 1–2 of 12 results</p>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            className="border-gray-300 text-gray-600 hover:bg-gray-100"
          >
            <ChevronLeft size={18} />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="border-gray-300 text-gray-600 hover:bg-gray-100"
          >
            2
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="border-gray-300 text-gray-600 hover:bg-gray-100"
          >
            3
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="border-gray-300 text-gray-600 hover:bg-gray-100"
          >
            <ChevronRight size={18} />
          </Button>
        </div>
      </div>
    </div>
  )
}

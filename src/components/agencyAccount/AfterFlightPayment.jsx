
import {
    Table,
    TableHeader,
    TableRow,
    TableHead,
    TableBody,
    TableCell,
} from "@/components/ui/table";

import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious
} from "../ui/pagination";

export default function AfterFlightPayment() {
    return (
        <div className="bg-white shadow-sm rounded-2xl p-6 border border-gray-100">
            <h2 className="text-2xl font-semibold text-gray-800 tracking-tight mb-4">
                After Flight Payment
            </h2>

            {/* Table */}
            <div className="overflow-x-auto rounded-sm border border-gray-200">
                <Table className="min-w-full">
                    <TableHeader className="bg-gray-100">
                        <TableRow>
                            <TableHead >Post Id</TableHead>
                            <TableHead >Customer Id</TableHead>

                            <TableHead >After Flight</TableHead>
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
    )
}

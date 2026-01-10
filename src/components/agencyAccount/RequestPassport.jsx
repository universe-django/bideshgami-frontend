import {
    Table,
    TableHeader,
    TableRow,
    TableHead,
    TableBody,
    TableCell,
} from "@/components/ui/table";
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuItem,
    DropdownMenuContent,
} from "@/components/ui/dropdown-menu";
import {
    Pagination, PaginationContent,
    PaginationItem, PaginationLink,
    PaginationNext, PaginationPrevious
} from "../ui/pagination";
import { EllipsisVertical } from "lucide-react";

export default function RequestPassport() {
    return (
        <div className="bg-white shadow-sm rounded-2xl p-6 border border-gray-100">
            <h2 className="text-2xl font-semibold text-gray-800 tracking-tight mb-4">
                Request For Passport
            </h2>

            {/* Table */}
            <div className="overflow-x-auto rounded-sm border border-gray-200 my-4">
                <Table className="min-w-full">
                    <TableHeader className="bg-gray-100">
                        <TableRow>
                            <TableHead >Post Id</TableHead>
                            <TableHead >Customer Id</TableHead>

                            <TableHead >Advacne</TableHead>
                            <TableHead >Paid</TableHead>
                            <TableHead >Total</TableHead>
                            <TableHead className="text-center">Action</TableHead>
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        <TableRow className="hover:bg-gray-50 transition">
                            <TableCell>174f2035</TableCell>
                            <TableCell className="font-medium text-gray-800">
                                kdk5fyee8
                            </TableCell>

                            <TableCell>979</TableCell>
                            <TableCell>988</TableCell>
                            <TableCell>10034</TableCell>
                            <TableCell className="text-center">
                                <DropdownMenu>
                                    <DropdownMenuTrigger>
                                        <EllipsisVertical className="text-gray-600 hover:text-gray-800" />
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent>
                                        <DropdownMenuItem className="mb-1">
                                            Send to Bideshgami
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>

            {/* Pagination */}
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
    )
}

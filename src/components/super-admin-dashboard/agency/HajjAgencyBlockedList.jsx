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
import { agencyReqList } from "@/temp_data/agencyList";
import { EllipsisVertical } from "lucide-react";

export default function HajjAgencyBlockedList() {
  const activeAgencyList = agencyReqList.filter(
    (agency) => agency.status === "inactive"
  );
  return (
    <div>
      <div className="p-6 rounded-lg bg-white shadow-sm border border-gray-200">
        <h2 className="text-2xl font-semibold text-gray-800 tracking-tight mb-4">
          Blocked Hajj & Umrah List
        </h2>

        <div className="overflow-x-auto rounded-sm border border-gray-200 w-full">
          <Table className="min-w-full">
            <TableHeader className="bg-gray-100">
              <TableRow>
                <TableHead>SL No.</TableHead>
                <TableHead>Merchant Name</TableHead>
                <TableHead>Phone No.</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody className="font-semibold text-gray-600">
              {activeAgencyList.map((list) => (
                <TableRow
                  key={list.id}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <TableCell>{list.id}</TableCell>
                  <TableCell>{list.name}</TableCell>
                  <TableCell>{list.phone}</TableCell>
                  <TableCell>{list.email}</TableCell>
                  <TableCell className="p-2">
                    <p
                      className={`bordertext-center text-emerald-600 font-semibold tracking-tight text-sm ${
                        list.status !== "active" && "text-red-500"
                      }`}
                    >
                      {list.status}
                    </p>
                  </TableCell>

                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <button className="rounded p-1 hover:bg-gray-100 transition">
                          <EllipsisVertical className="w-5 h-5 text-gray-600" />
                        </button>
                      </DropdownMenuTrigger>

                      <DropdownMenuContent className="w-36 me-2 p-2 space-y-1">
                        <DropdownMenuItem className="cursor-pointer text-gray-700 text-center font-medium hover:bg-gray-100">
                          View
                        </DropdownMenuItem>
                        <DropdownMenuItem className="cursor-pointer text-red-600 text-center font-medium hover:bg-red-50">
                          Delete
                        </DropdownMenuItem>
                        <DropdownMenuItem className="cursor-pointer text-gray-700 text-center font-medium hover:bg-gray-100">
                          Edit
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}

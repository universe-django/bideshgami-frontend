import React, { useState } from "react";
import { Edit } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

export default function AgencyManageUser() {
  const [users, setUsers] = useState([
    {
      id: "01",
      email: "sara.cruz@example.com",
      phone: "+8801700-000000",
      designation: "Accounts Manager",
      status: "blocked",
    },
    {
      id: "02",
      email: "sara.cruz@example.com",
      phone: "+8801700-000000",
      designation: "Accounts Manager",
      status: "unblocked",
    },
    {
      id: "03",
      email: "sara.cruz@example.com",
      phone: "+8801700-000000",
      designation: "Accounts Manager",
      status: "blocked",
    },
    {
      id: "04",
      email: "test.cruz@example.com",
      phone: "+8801700-000000",
      designation: "Accounts Manager",
      status: "unblocked",
    },
    {
      id: "01",
      email: "sara.cruz@example.com",
      phone: "+8801700-000000",
      designation: "Accounts Manager",
      status: "blocked",
    },
    {
      id: "02",
      email: "sara.cruz@example.com",
      phone: "+8801700-000000",
      designation: "Accounts Manager",
      status: "unblocked",
    },
    {
      id: "05",
      email: "sara.cruz@example.com",
      phone: "+8801700-000000",
      designation: "Accounts Manager",
      status: "blocked",
    },
  ]);

  const toggleStatus = (index) => {
    setUsers(
      users.map((user, i) =>
        i === index
          ? {
              ...user,
              status: user.status === "blocked" ? "unblocked" : "blocked",
            }
          : user
      )
    );
  };

  return (
    <div className="w-full bg-white rounded-2xl p-8">
      <div className="max-w-7xl mx-auto ">
        <Table>
          <TableHeader className={"bg-white"}>
            <TableRow className="">
              <TableHead className="font-semibold text-gray-700">
                User ID
              </TableHead>
              <TableHead className="font-semibold text-gray-700">
                E-mail
              </TableHead>
              <TableHead className="font-semibold text-gray-700">
                Phone No.
              </TableHead>
              <TableHead className="font-semibold text-gray-700">
                Employee Designation
              </TableHead>
              <TableHead className="font-semibold text-gray-700">
                Account Status
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user, index) => (
              <TableRow key={index} className="border-b hover:bg-gray-50">
                <TableCell className="font-medium text-gray-700">
                  {user.id}
                </TableCell>
                <TableCell className="text-gray-600">{user.email}</TableCell>
                <TableCell className="text-gray-600">{user.phone}</TableCell>
                <TableCell className="text-gray-600">
                  {user.designation}
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Button
                      onClick={() => toggleStatus(index)}
                      className={`${
                        user.status === "blocked"
                          ? "bg-blue-600 hover:bg-blue-700"
                          : "bg-red-500 hover:bg-red-600"
                      } text-white px-6 py-1 h-8 text-sm font-medium`}
                    >
                      {user.status === "blocked" ? "Block" : "Unblock"}
                    </Button>
                    <Button className="bg-green-500 hover:bg-green-600 text-white px-4 py-1 h-8 text-sm font-medium flex items-center gap-1">
                      Edit
                      <Edit className="w-3 h-3" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

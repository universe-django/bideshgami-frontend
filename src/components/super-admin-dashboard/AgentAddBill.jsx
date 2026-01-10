import React from "react";
import { Card } from "../ui/card";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "../ui/table";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "../ui/dropdown-menu";
import { EllipsisVertical, Plus } from "lucide-react";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";

const agencyBillData = [
  {
    postId: "POST-2025101201",
    customerName: "Md. Rahim Uddin",
    passportNo: "BX1234567",
    processingBy: "Soft Tech Travels",
    agent: "Global Manpower Ltd.",
    to: "Saudi Arabia",
    totalAmount: "1,50,000 BDT",
    paidAmount: "1,00,000 BDT",
    agentCommission: "10,000 BDT",
    bgCommission: "5,000 BDT",
  },
  {
    postId: "POST-2025101202",
    customerName: "Sajid Hasan",
    passportNo: "CX9876543",
    processingBy: "Universe IT Recruitment",
    agent: "Al Noor Agency",
    to: "Dubai, UAE",
    totalAmount: "1,20,000 BDT",
    paidAmount: "90,000 BDT",
    agentCommission: "8,000 BDT",
    bgCommission: "4,000 BDT",
  },
  {
    postId: "POST-2025101203",
    customerName: "Kamal Hossain",
    passportNo: "DX5678123",
    processingBy: "Bideshgami Agency",
    agent: "Trust Overseas",
    to: "Qatar",
    totalAmount: "1,40,000 BDT",
    paidAmount: "1,20,000 BDT",
    agentCommission: "9,000 BDT",
    bgCommission: "4,500 BDT",
  },
  {
    postId: "POST-2025101204",
    customerName: "Abdul Karim",
    passportNo: "AX8765432",
    processingBy: "Hajj & Umrah Travels",
    agent: "Prime Recruiting",
    to: "Oman",
    totalAmount: "1,30,000 BDT",
    paidAmount: "1,10,000 BDT",
    agentCommission: "8,500 BDT",
    bgCommission: "4,000 BDT",
  },
];
export default function AgentAddBill() {
  return (
    <Card className="bg-white border border-gray-200 rounded-md p-4 ">
      <div className="flex justify-between items-start">
        <h2 className="tracking-tight text-2xl font-bold">Agent Add Bill</h2>
        <div className="space-y-2">
          <p>INVOICE</p>
          <Input placeholder="invoice" />
        </div>
      </div>
      <form>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="space-y-2">
            <Label htmlFor="formAccount">From Account</Label>
            <Input
              type="text"
              placeholder="Enter Your Account Number"
              className="rounded-sm "
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="toAccount">To Account</Label>
            <Input
              type="text"
              placeholder="Enter Your Account Number"
              className="rounded-sm "
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="space-y-2">
            <Label htmlFor="accountno">Initial Balance</Label>
            <Input
              type="text"
              placeholder="Enter Your Account number"
              className="rounded-sm "
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="refBalance">Reference Balance</Label>
            <Input
              type="text"
              placeholder="Reference Balance"
              className="rounded-sm "
            />
          </div>
        </div>
      </form>

      <div className="mt-5">
        <Table>
          <TableHeader className="bg-gray-200">
            <TableRow>
              <TableHead>Post ID</TableHead>
              <TableHead>Customer Name</TableHead>
              <TableHead>Passport No</TableHead>
              <TableHead>Processing By</TableHead>
              <TableHead>Agent</TableHead>
              <TableHead>To</TableHead>
              <TableHead>Total Amount</TableHead>
              <TableHead>Paid Amount</TableHead>
              <TableHead>Agent Cmm</TableHead>
              <TableHead>Bg Cmm</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {agencyBillData.map((billItem, index) => (
              <TableRow key={index}>
                <TableCell>{billItem.postId}</TableCell>
                <TableCell>{billItem.customerName}</TableCell>
                <TableCell>{billItem.passportNo}</TableCell>
                <TableCell>{billItem.processingBy}</TableCell>
                <TableCell>{billItem.agent}</TableCell>
                <TableCell>{billItem.to}</TableCell>
                <TableCell>{billItem.totalAmount}</TableCell>
                <TableCell>{billItem.paidAmount}</TableCell>
                <TableCell>{billItem.agentCommission}</TableCell>
                <TableCell>{billItem.bgCommission}</TableCell>

                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <EllipsisVertical />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem>View</DropdownMenuItem>
                      <DropdownMenuItem>Delete</DropdownMenuItem>
                      <DropdownMenuItem>Edit</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Button className="my-3 rounded-sm hover:bg-indigo-950">
          <Plus />
          Add More
        </Button>

        <div className="grid grid-cols-2 gap-4 mt-5">
          <div className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="accountno">Initial Balance</Label>
              <Input
                type="text"
                placeholder="Enter Your Account number"
                className="rounded-xs "
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="accountno">Initial Balance</Label>
              <Input
                type="text"
                placeholder="Enter Your Account number"
                className="rounded-xs "
              />
            </div>
          </div>
          <div className="ml-10 space-y-2">
            <div className="flex bg-slate-100 p-2 justify-between items-center">
              <span>Total Ammount</span>
              <span>৳ 58,45,255</span>
            </div>
            <div className="flex justify-between  p-2 items-center">
              <span>Payable Amount</span>
              <span>৳ 58,45,255</span>
            </div>
            <div className="flex justify-between bg-slate-100 p-2 items-center">
              <span>Agent Commission: </span>
              <span>৳ 58,45,255</span>
            </div>
            <div className="flex justify-between p-2 items-center">
              <span>Bideshgami Commission</span>
              <span>৳ 58,45,255</span>
            </div>
            <div className="flex justify-between  bg-slate-100 p-2 items-center">
              <span>Discount:</span>
              <span>৳ 45,255</span>
            </div>
            <div className="flex justify-between  p-2 items-center">
              <span>Grand Total</span>
              <span>৳ 45,255</span>
            </div>
            <div className="flex justify-between bg-slate-100 p-2 items-center">
              <span>Due</span>
              <span>৳ 45,255</span>
            </div>
          </div>
        </div>
        <div className="space-y-2 mb-4">
          <Label htmlFor="initialBalance">Note</Label>
          <Textarea
            placeholder="Enter Your Initial Balance"
            className="rounded-sm"
          />
        </div>

        <div className=" space-y-4">
          <Button className="hover:bg-primary/60">Submit</Button>
        </div>
      </div>
    </Card>
  );
}

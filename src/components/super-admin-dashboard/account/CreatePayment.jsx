import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";

export default function CreatePayment() {
  return (
    <>
      <Card className="bg-white border border-gray-200 rounded-md p-4 ">
        <h2 className="tracking-tight text-2xl font-bold">Invoice</h2>
        <form>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="space-y-2">
              <Label htmlFor="group">Group</Label>
              <Input
                type="text"
                placeholder="Enter Your group name"
                className="rounded-sm "
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="status">Status</Label>
              <Input type="text" placeholder="status" className="rounded-sm " />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="space-y-2">
              <Label htmlFor="voucher">Voucher Number</Label>
              <Input
                type="text"
                placeholder="Voucher Number"
                className="rounded-sm "
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="account">Account </Label>
              <Input
                type="text"
                placeholder="Account"
                className="rounded-sm "
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="space-y-2">
              <Label htmlFor="payment">Payment Type</Label>
              <Input
                type="text"
                placeholder="Enter Your payment type"
                className="rounded-sm "
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="ammount">Ammount</Label>
              <Input
                type="text"
                placeholder="Enter Your ammount"
                className="rounded-sm "
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="space-y-2">
              <Label htmlFor="reference">Reference</Label>
              <Input
                type="text"
                placeholder="Enter Your Reference"
                className="rounded-sm "
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="date">Date</Label>
              <Input type="date" className="rounded-sm " />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="space-y-2">
              <Label htmlFor="paymentreciept">Payment Receipt</Label>
              <Input
                type="file"
                placeholder="Enter Your Payment Receipt"
                className="rounded-sm "
              />
            </div>
          </div>
          <div className="space-y-2 mb-4">
            <Label htmlFor="date">note</Label>
            <Textarea placeholder="Enter Your note" className="rounded-sm " />
          </div>
          <div className="flex flex-col justify-center items-center space-y-4 mx-auto">
            <Button className="hover:bg-primary/60"> Create Now</Button>
          </div>
        </form>
      </Card>
    </>
  );
}

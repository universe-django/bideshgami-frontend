import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";

export default function CreateTransfer() {
  return (
    <>
      <Card className="bg-white border border-gray-200 rounded-md p-4 ">
        <h2 className="tracking-tight text-2xl font-bold">Create Transfer</h2>
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
          <div className="space-y-2 mb-4">
            <Label htmlFor="initialBalance">Note</Label>
            <Textarea
              placeholder="Enter Your Initial Balance"
              className="rounded-sm"
            />
          </div>

          <div className="flex flex-col justify-center items-center space-y-4 mx-auto">
            <Button className="hover:bg-primary/60"> Create Now</Button>
          </div>
        </form>
      </Card>
    </>
  );
}

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function AddBank() {
  return (
    <>
      <Card className="bg-white border border-gray-200 rounded-md p-4 ">
        <h2 className="tracking-tight text-2xl font-bold">Add Bank Account</h2>
        <form>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="space-y-2">
              <Label htmlFor="bankname">Bank Name</Label>
              <Input
                type="text"
                placeholder="Enter Your bank name"
                className="rounded-sm "
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="bankname">Account Name</Label>
              <Input
                type="text"
                placeholder="Enter Your Account name"
                className="rounded-sm "
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="space-y-2">
              <Label htmlFor="accountno">Account No</Label>
              <Input
                type="text"
                placeholder="Enter Your Account number"
                className="rounded-sm "
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="accountholder">Account Holder</Label>
              <Input
                type="text"
                placeholder="Enter Your Account Holder"
                className="rounded-sm "
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="space-y-2">
              <Label htmlFor="initialBalance">Initial Balance</Label>
              <Input
                type="text"
                placeholder="Enter Your Initial Balance"
                className="rounded-sm "
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="bankurl">Internet Banking Url</Label>
              <Input
                type="text"
                placeholder="Enter Your Internet Banking Url"
                className="rounded-sm "
              />
            </div>
          </div>

          <div className="flex flex-col justify-center items-center space-y-4 mx-auto">
            <RadioGroup>
              <div className="flex space-x-6 ">
                <div className="flex items-center gap-1">
                  <RadioGroupItem value="active" id="active" />
                  <Label htmlFor="r1">Active</Label>
                </div>
                <div className="flex items-center gap-1">
                  <RadioGroupItem value="inactive" id="inactive" />
                  <Label htmlFor="r1">Inactive</Label>
                </div>
              </div>
            </RadioGroup>
            <Button className="hover:bg-primary/60"> Create Now</Button>
          </div>
        </form>
      </Card>
    </>
  );
}

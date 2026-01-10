import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export default function CreateDebitVoucher() {
  const [date, setDate] = useState(null);

  // Simple manual date formatting (no date-fns)
  const formatDate = (date) => {
    if (!date) return "DD-MM-YYYY";
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  return (
    <div className="">
      <Card className="w-full shadow-sm border rounded-lg">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">
            Create Debit Voucher
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Date + Service Type */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col space-y-2">
                <Label>Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <button
                      type="button"
                      className={cn(
                        "flex w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm text-muted-foreground"
                      )}
                    >
                      {formatDate(date)}
                      <CalendarIcon className="ml-2 h-4 w-4 opacity-50" />
                    </button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div className="flex flex-col space-y-2">
                <Label>Service Type</Label>
                <Input placeholder="" />
              </div>
            </div>

            {/* Payment Mode + Reference */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col space-y-2">
                <Label>Payment Mode</Label>
                <Input placeholder="" />
              </div>

              <div className="flex flex-col space-y-2">
                <Label>Reference</Label>
                <Input placeholder="" />
              </div>
            </div>

            {/* Account Name + Amount */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col space-y-2">
                <Label>Account Name</Label>
                <Input placeholder="" />
              </div>

              <div className="flex flex-col space-y-2">
                <Label>Amount</Label>
                <Input type="number" placeholder="" />
              </div>
            </div>

            {/* Note */}
            <div className="flex flex-col space-y-2">
              <Label>Note</Label>
              <Textarea
                placeholder="Write Tanchfare note......."
                className="resize-none"
              />
            </div>

            {/* Button */}
            <div className="flex justify-center pt-2">
              <Button className="px-6 bg-blue-600 hover:bg-blue-700">
                Create Now
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

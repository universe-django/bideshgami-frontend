import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye } from "lucide-react";
import React from "react";

export default function CustomerWPBEdit() {
  return (
    <Card className="flex flex-col p-6 space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h2 className="text-2xl font-bold text-gray-800 tracking-tight">
          Customer Booking Form
        </h2>
        <Button className="sm:w-auto w-full bg-gradient-to-r from-primary to-primary/80 text-white hover:opacity-90">
          <Eye /> View Post
        </Button>
      </div>

      {/* Customer Bank Details */}
      <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="bankname">Enter Your Full Name</Label>
          <Input
            id="bankname"
            type="text"
            placeholder="Enter Your Full Name"
            className="rounded-lg"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="accountname">Enter Your Phone Number</Label>
          <Input
            id="accountname"
            type="text"
            placeholder="Enter Your Phone Number"
            className="rounded-lg"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="accountno">Enter YourE-mail</Label>
          <Input
            id="accountno"
            type="text"
            placeholder="Enter YourE-mail"
            className="rounded-lg"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="accountholder">Enter Your Passport Number </Label>
          <Input
            id="accountholder"
            type="text"
            placeholder="Enter Your Passport Number "
            className="rounded-lg"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="initialBalance"> Select Your Gender</Label>
          <Input
            id="initialBalance"
            type="text"
            placeholder="Enter initial balance"
            className="rounded-lg"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="bankurl">From (Auto Fill)</Label>
          <Input
            id="bankurl"
            type="text"
            placeholder="From (Auto Fill)"
            className="rounded-lg"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="initialBalance"> To (Auto Fill)</Label>
          <Input
            id="initialBalance"
            type="text"
            placeholder="To (Auto Fill)"
            className="rounded-lg"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="bankurl">Choose Your Application Center</Label>
          <Input
            id="bankurl"
            type="text"
            placeholder="Choose Your Application Center"
            className="rounded-lg"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="initialBalance"> Service Type (Auto Fill)</Label>
          <Input
            id="initialBalance"
            type="text"
            placeholder="Service Type (Auto Fill)"
            className="rounded-lg"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="bankurl">Totall Pyment (Auto Fill)</Label>
          <Input
            id="bankurl"
            type="text"
            placeholder="Totall Pyment (Auto Fill)"
            className="rounded-lg"
          />
        </div>
      </form>

      {/* Advance Payment Section */}
      <div className="space-y-6">
        <h3 className="text-lg font-semibold text-gray-700">
          Payment Collection
        </h3>
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <div className="flex-1 space-y-2">
            <Input
              type="text"
              placeholder="Advance payment"
              className="rounded-lg"
            />
          </div>
          <div className="flex-1 space-y-2">
            <div className="flex gap-3">
              <Input type="text" placeholder="Amount" className="rounded-lg" />
              <Button>Collect</Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <div className="flex-1 space-y-2">
            <Input
              type="text"
              placeholder="After Visa Payment"
              className="rounded-lg"
            />
          </div>
          <div className="flex-1 space-y-2">
            <div className="flex gap-3">
              <Input type="text" placeholder="Amount" className="rounded-lg" />
              <Button>Collect</Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <div className="flex-1 space-y-2">
            <Input
              type="text"
              placeholder="Before Flight Payment"
              className="rounded-lg"
            />
          </div>
          <div className="flex-1 space-y-2">
            <div className="flex gap-3">
              <Input type="text" placeholder="Amount" className="rounded-lg" />
              <Button>Collect</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Agent Info Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {["Passport Sender", "Passport Receiver"].map((role, idx) => (
          <div key={idx} className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-700">
              Agent Info ({role})
            </h3>
            <div className="bg-white border border-gray-300 rounded-xl p-4 shadow-sm space-y-2">
              {[
                "Agent Name",
                "RL Number",
                "Phone Number",
                "E-mail",
                "Agency ID / Agent ID",
              ].map((field, idx2) => (
                <div key={idx2}>
                  <p className="text-gray-600">
                    <strong>{field}:</strong> {/* Replace with dynamic data */}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mb-5">
        <Button>Collect Passport</Button>
      </div>
    </Card>
  );
}

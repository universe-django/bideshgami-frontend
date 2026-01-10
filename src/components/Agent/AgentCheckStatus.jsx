import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function AgentStatusCheck() {
  return (
    <div className="min-h-screen bg-gray-100 w-full items-center justify-center">
      <div className=" mx-auto bg-white rounded-lg p-6">
        {/* Title */}
        <h2 className="text-lg font-semibold my-10 text-gray-800 mb-6">
          CHECK YOUR{" "}
          <span className="text-blue-600 font-bold">APPLICATION</span>
        </h2>

        {/* Form */}
        <form className="space-y-6">
          {/* Input Fields */}
          <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
            <div>
              <Label className="text-gray-700 font-medium">
                Passport Number<span className="text-red-500">*</span>
              </Label>
              <Input
                placeholder="Passport Number"
                className="mt-2 border-gray-300 focus-visible:ring-blue-500"
              />
            </div>

            <div>
              <Label className="text-gray-700 font-medium">
                Date of Birth<span className="text-red-500">*</span>
              </Label>
              <Input
                type="date"
                placeholder="Date of Birth"
                className="mt-2 border-gray-300 focus-visible:ring-blue-500"
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col items-center gap-3 mt-8">
            <Button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white w-40"
            >
              SUBMIT
            </Button>
            <Button
              type="reset"
              variant="outline"
              className="border-blue-600 text-blue-600 hover:bg-blue-50 w-40"
            >
              CLEAR
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

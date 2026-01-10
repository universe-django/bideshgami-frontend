import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export default function StatusCheck() {
  return (
    <>
      <div className="mt-5">
        <h1 className="text-3xl tracking-tight font-bold text-green-600">
          Check your Application Here
        </h1>
        <div className="mt-5">
          <form className="flex flex-col gap-2 justify-center items-center">
            <div className="flex justify-center items-center gap-4 w-full">
              <div className="w-full">
                <Label className="mb-2">
                  Passport Number <span className="text-red-600">*</span>
                </Label>
                <Input type="number" placeholder="Passport Number" />
              </div>
              <div className="w-full">
                <Label className="mb-2">
                  Date of Birth <span className="text-red-600">*</span>
                </Label>
                <Input type="date" placeholder="Select your Date of Birth" />
              </div>
            </div>
            <div className="flex flex-col gap-3 mt-8">
              <Button type="submit" className="w-xs">
                Submit
              </Button>
              <Button type="reset" className="w-xs">
                Reset
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

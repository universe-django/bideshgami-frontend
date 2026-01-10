import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export default function ChangePassword() {
  return (
    <>
      <div className="bg-slate-50 rounded-md p-4 mt-10 flex flex-col gap-2 justify-center items-center w-1/2 mx-auto border border-slate-200">
        <h2 className="text-2xl  font-bold my-4">
          Change <span className="text-blue-600">Your Password</span>
        </h2>

        <form className="w-full">
          <div className="w-full mb-6">
            <Label className="mb-2">
              Current Password <span className="text-red-600">*</span>
            </Label>
            <Input
              type="password"
              placeholder="Current Password"
              className="w-full"
            />
          </div>
          <div className="w-full mb-6">
            <Label className="mb-2">
              New Password <span className="text-red-600">*</span>
            </Label>
            <Input
              type="password"
              placeholder="New Password"
              className="w-full"
            />
          </div>
          <div className="w-full mb-6">
            <Label className="mb-2">
              Confirm Password <span className="text-red-600">*</span>
            </Label>
            <Input
              type="password"
              placeholder="Confirm Password"
              className="w-full"
            />
          </div>
          <div className="flex justify-center items-center gap-4">
            <Button type="submit" className="hover:bg-primary/70">
              Update Password
            </Button>
            <Button type="reset" className="bg-transparent text-blue-500">
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}

import React from "react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
} from "../ui/select";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

import { Label } from "../ui/label";
import { Link } from "react-router";
import { CircleQuestionMark } from "lucide-react";

export default function VisaApply() {
  return (
    <div className="bg-gray-50 flex items-center justify-center min-h-screen my-10 w-full px-4 sm:px-6 lg:px-8">
      <div className="bg-white shadow-md rounded-lg p-6 sm:p-8 shadow-blue-200 w-full max-w-lg lg:max-w-5xl">
        <h2 className="text-center text-3xl font-semibold mb-6">
          Your Booking From
        </h2>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
          {/* */}
          <div className="relative space-y-1">
            <Label className="block text-sm">Enter Your Full Name</Label>
            <Input
              type="text"
              placeholder="Full Name"
              className="w-full border rounded-md py-2 pr-9 focus:ring focus:ring-blue-300 outline-none"
            />
            <span className="absolute right-2 inset-y-1/2 -translate-y-1/2 text-gray-500">
              <CircleQuestionMark size="20" />
            </span>
          </div>

          {/* */}
          <div className="relative space-y-1">
            <Label className="block text-sm ">Enter Your Phone Number</Label>
            <Input
              type="text"
              placeholder="Enter Your Phone Number"
              className="w-full border rounded-md py-2 pr-9 focus:ring focus:ring-blue-300 outline-none"
            />

            <span className="absolute right-2 inset-y-1/2 -translate-y-1/2 text-gray-500">
              <CircleQuestionMark size="20" />
            </span>
          </div>
          <div className="relative space-y-1">
            <Label className="block text-sm ">Enter Your passport Number</Label>
            <Input
              type="text"
              placeholder="Enter Your passport Number"
              className="w-full border rounded-md py-2 pr-9 focus:ring focus:ring-blue-300 outline-none"
            />

            <span className="absolute right-2 inset-y-1/2 -translate-y-1/2 text-gray-500">
              <CircleQuestionMark size="20" />
            </span>
          </div>
          {/* */}
          <div className="relative space-y-1">
            <Label className="block text-sm ">Enter Your E-mail</Label>
            <Input
              type="email"
              placeholder="Enter Your E-mail"
              className="w-full border rounded-md py-2 pr-9 focus:ring focus:ring-blue-300 outline-none"
            />
            <span className="absolute right-2 inset-y-1/2 -translate-y-1/2 text-gray-500">
              <CircleQuestionMark size={20} />
            </span>
          </div>

          <div>
            <Label className="block text-sm mb-1">Select Your Gender</Label>
            <Select>
              <SelectTrigger className="w-full ">
                <SelectValue placeholder="Select Gender" />
              </SelectTrigger>
              <SelectContent className="w-full">
                <SelectGroup>
                  <SelectLabel>Gender</SelectLabel>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                  <SelectItem value="others">Others</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div className="w-full">
            <Label className="block text-sm mb-1">
              Choose Your Application Center
            </Label>
            <Select>
              <SelectTrigger className="w-full ">
                <SelectValue placeholder=" Select Application Center" />
              </SelectTrigger>
              <SelectContent className="w-full">
                <SelectGroup>
                  <SelectLabel>Application Center</SelectLabel>
                  <SelectItem value="gazipur">Gazipur</SelectItem>
                  <SelectItem value="chitagong">Chitagong</SelectItem>
                  <SelectItem value="barishal">Barishal</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="w-full md:col-span-2">
            <Label className="block text-sm mb-1">Appointment Date</Label>
            <div className="w-full flex">
              <Input
                type="date"
                className="w-full sm:w-3/4 md:w-1/2 border rounded-md px-3 py-2 focus:ring focus:ring-blue-300 outline-none"
              />
            </div>
          </div>

          <div className="md:col-span-2 w-full">
            <div className="flex gap-2 items-start">
              <Input
                type="checkbox"
                id="agree"
                className="mt-1 w-4 h-4 border-gray-300 rounded"
              />
              <Label htmlFor="agree" className="text-sm flex flex-wrap gap-1">
                I agree with Blideshgami
                <Link to="#" className="text-blue-500 underline">
                  Privacy Policy
                </Link>
                and
                <Link to="#" className="text-blue-500 underline">
                  Terms & Conditions
                </Link>
              </Label>
            </div>
          </div>

          <div className="col-span-1 md:col-span-2 flex flex-col sm:flex-row justify-center gap-4 mt-6">
            <Button
              type="submit"
              className="w-full sm:w-auto md:w-1/3 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Submit
            </Button>
            <Button
              type="reset"
              className="w-full sm:w-auto md:w-1/3 px-6 py-2 bg-gray-400 hover:bg-gray-500 text-white rounded-lg"
            >
              Reset
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

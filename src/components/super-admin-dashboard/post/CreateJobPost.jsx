import { Card, CardContent } from "@/components/ui/card";
import React from "react";
import UploadIcon from "../../../assets/uploade.png";
import { Button } from "@/components/ui/button";
import { CircleAlert } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
} from "@/components/ui/select";

export default function CreateJobPost() {
  return (
    <Card className="bg-white rounded-2xl shadow-md p-5 w-full">
      <CardContent>
        <form className="space-y-5">
          <label
            className=" w-full py-10 bg-indigo-50 hover:bg-indigo-100 border-2 border-dashed 
          border-indigo-600 rounded-2xl flex flex-col justify-center items-center gap-5 
          cursor-pointer transition-all duration-300 shadow-sm hover:shadow-md overflow-hidden"
          >
            <img
              src={UploadIcon}
              alt="Upload"
              className="w-16 h-16 object-contain opacity-80 hover:opacity-100 transition-opacity"
            />
            <span className="text-indigo-700 font-medium text-lg">
              Click or Drag & Drop to Upload
            </span>
            <p className="text-sm text-gray-500">
              Supported formats: JPG, PNG, PDF
            </p>
            <input type="file" className="hidden" />
          </label>

          <Button className="bg-indigo-600 text-white hover:bg-indigo-700 w-full">
            Submit
          </Button>
        </form>
        <div className="w-full bg-amber-100 p-4 mt-4">
          <h1 className="inline-flex gap-2 items-center font-bold">
            <CircleAlert className="  stroke-amber-500 size-5" /> Important
            Instruction
          </h1>
          <p className="leading-relaxed">
            Office address, phone number, email, or RL number must not
            bementioned anywhere in the post.
          </p>
        </div>
        {/* 2nd Form */}
        <form className="my-5 ">
          <div className="flex gap-4 mt-5">
            <div className="space-y-2 w-full">
              <Label htmlFor="jobTitle">Job Title</Label>
              <Input type="text" placeholder="Job Post" />
            </div>
            <div className="space-y-2 w-full">
              <Label htmlFor="country">Country Name</Label>
              <Select>
                <SelectTrigger className="w-full ">
                  <SelectValue placeholder="Select Country" />
                </SelectTrigger>
                <SelectContent className="w-full">
                  <SelectGroup>
                    <SelectLabel>Country Name</SelectLabel>
                    <SelectItem value="aus">Australia</SelectItem>
                    <SelectItem value="china">China</SelectItem>
                    <SelectItem value="dubai">Dubai</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex gap-4 mt-5">
            <div className="space-y-2 w-full">
              <Label htmlFor="jobTitle">Job Title</Label>
              <Input type="text" placeholder="Job Post" />
            </div>
            <div className="space-y-2 w-full">
              <Label htmlFor="country">Country Name</Label>
              <Select>
                <SelectTrigger className="w-full ">
                  <SelectValue placeholder="Select Country" />
                </SelectTrigger>
                <SelectContent className="w-full">
                  <SelectGroup>
                    <SelectLabel>Country Name</SelectLabel>
                    <SelectItem value="aus">Australia</SelectItem>
                    <SelectItem value="china">China</SelectItem>
                    <SelectItem value="dubai">Dubai</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex gap-4 ">
            <div className="space-y-2 w-full">
              <Label htmlFor="jobTitle">Job Title</Label>
              <Input type="text" placeholder="Job Post" />
            </div>
            <div className="space-y-2 w-full">
              <Label htmlFor="country">Country Name</Label>
              <Select>
                <SelectTrigger className="w-full ">
                  <SelectValue placeholder="Select Country" />
                </SelectTrigger>
                <SelectContent className="w-full">
                  <SelectGroup>
                    <SelectLabel>Country Name</SelectLabel>
                    <SelectItem value="aus">Australia</SelectItem>
                    <SelectItem value="china">China</SelectItem>
                    <SelectItem value="dubai">Dubai</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex gap-4 ">
            <div className="space-y-2 w-full">
              <Label htmlFor="jobTitle">Job Title</Label>
              <Input type="text" placeholder="Job Post" />
            </div>
            <div className="space-y-2 w-full">
              <Label htmlFor="country">Country Name</Label>
              <Select>
                <SelectTrigger className="w-full ">
                  <SelectValue placeholder="Select Country" />
                </SelectTrigger>
                <SelectContent className="w-full">
                  <SelectGroup>
                    <SelectLabel>Country Name</SelectLabel>
                    <SelectItem value="aus">Australia</SelectItem>
                    <SelectItem value="china">China</SelectItem>
                    <SelectItem value="dubai">Dubai</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex gap-4 ">
            <div className="space-y-2 w-full">
              <Label htmlFor="jobTitle">Job Title</Label>
              <Input type="text" placeholder="Job Post" />
            </div>
            <div className="space-y-2 w-full">
              <Label htmlFor="country">Country Name</Label>
              <Select>
                <SelectTrigger className="w-full ">
                  <SelectValue placeholder="Select Country" />
                </SelectTrigger>
                <SelectContent className="w-full">
                  <SelectGroup>
                    <SelectLabel>Country Name</SelectLabel>
                    <SelectItem value="aus">Australia</SelectItem>
                    <SelectItem value="china">China</SelectItem>
                    <SelectItem value="dubai">Dubai</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex gap-4 ">
            <div className="space-y-2 w-full">
              <Label htmlFor="jobTitle">Job Title</Label>
              <Input type="text" placeholder="Job Post" />
            </div>
            <div className="space-y-2 w-full">
              <Label htmlFor="country">Country Name</Label>
              <Select>
                <SelectTrigger className="w-full ">
                  <SelectValue placeholder="Select Country" />
                </SelectTrigger>
                <SelectContent className="w-full">
                  <SelectGroup>
                    <SelectLabel>Country Name</SelectLabel>
                    <SelectItem value="aus">Australia</SelectItem>
                    <SelectItem value="china">China</SelectItem>
                    <SelectItem value="dubai">Dubai</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex gap-4 ">
            <div className="space-y-2 w-full">
              <Label htmlFor="jobTitle">Job Title</Label>
              <Input type="text" placeholder="Job Post" />
            </div>
            <div className="space-y-2 w-full">
              <Label htmlFor="country">Country Name</Label>
              <Select>
                <SelectTrigger className="w-full ">
                  <SelectValue placeholder="Select Country" />
                </SelectTrigger>
                <SelectContent className="w-full">
                  <SelectGroup>
                    <SelectLabel>Country Name</SelectLabel>
                    <SelectItem value="aus">Australia</SelectItem>
                    <SelectItem value="china">China</SelectItem>
                    <SelectItem value="dubai">Dubai</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex gap-4 ">
            <div className="space-y-2 w-full">
              <Label htmlFor="jobTitle">Job Title</Label>
              <Input type="text" placeholder="Job Post" />
            </div>
            <div className="space-y-2 w-full">
              <Label htmlFor="country">Country Name</Label>
              <Select>
                <SelectTrigger className="w-full ">
                  <SelectValue placeholder="Select Country" />
                </SelectTrigger>
                <SelectContent className="w-full">
                  <SelectGroup>
                    <SelectLabel>Country Name</SelectLabel>
                    <SelectItem value="aus">Australia</SelectItem>
                    <SelectItem value="china">China</SelectItem>
                    <SelectItem value="dubai">Dubai</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex gap-4 ">
            <div className="space-y-2 w-full">
              <Label htmlFor="jobTitle">Job Title</Label>
              <Input type="text" placeholder="Job Post" />
            </div>
            <div className="space-y-2 w-full">
              <Label htmlFor="country">Country Name</Label>
              <Select>
                <SelectTrigger className="w-full ">
                  <SelectValue placeholder="Select Country" />
                </SelectTrigger>
                <SelectContent className="w-full">
                  <SelectGroup>
                    <SelectLabel>Country Name</SelectLabel>
                    <SelectItem value="aus">Australia</SelectItem>
                    <SelectItem value="china">China</SelectItem>
                    <SelectItem value="dubai">Dubai</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}

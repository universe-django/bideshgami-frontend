import React from "react";
import { Card, CardContent, CardFooter } from "../ui/card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectValue,
  SelectLabel,
  SelectItem,
  SelectTrigger,
} from "../ui/select";

import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Search } from "lucide-react";
const country = [
  {
    id: 1,
    name: "Japan",
  },
  {
    id: 2,
    name: "USA",
  },
  {
    id: 3,
    name: "Germany",
  },
  {
    id: 4,
    name: "Saudi Arabia",
  },
  {
    id: 5,
    name: "North korea",
  },
];

const workTypes = [
  {
    id: 1,
    type: "Plumber",
  },
  {
    id: 2,
    type: "Teacher",
  },
  {
    id: 3,
    type: "Marketing",
  },
  {
    id: 4,
    type: "Swiper",
  },
];
export default function FilterOptionsTest() {
  return (
    <Card className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-md mx-auto rounded-lg overflow-hidden shadow-sm relative  -mt-12 p-4 ">
      <CardContent className="px-0 sm:p-6 flex gap-2">
        <Select className="flex-1">
          <SelectTrigger className="w-full border border-gray-300 rounded-md py-3 px-4 flex justify-between items-center gap-2 hover:border-gray-400 transition-colors">
            <SelectValue placeholder="Select Country" />
          </SelectTrigger>
          <SelectContent className="w-full">
            <SelectGroup>
              <SelectLabel>Country Name</SelectLabel>
              {country.map((countryName) => (
                <SelectItem key={countryName.id} value={countryName.name}>
                  {countryName.name}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>

        <Select className="flex-1">
          <SelectTrigger className="w-full border border-gray-300 rounded-md py-3 px-4 flex justify-between items-center gap-2 hover:border-gray-400 transition-colors">
            <SelectValue placeholder="Select Type" />
          </SelectTrigger>
          <SelectContent className="w-full ">
            <SelectGroup>
              <SelectLabel>Work Type</SelectLabel>
              {workTypes.map((workType) => (
                <SelectItem key={workType.id} value={workType.type}>
                  {workType.type}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>

        <div className="flex-none">
          <Button className="py-4">
            <svg
              viewBox="0 0 18 18"
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="none"
            >
              <path
                d="M9 3L9 1M7.5 6A1.5 1.5 0 119 7.5 1.5 1.5 0 017.5 6ZM3 13A1.5 1.5 0 114.5 14.5 1.5 1.5 0 013 13ZM15 13A1.5 1.5 0 1116.5 14.5 1.5 1.5 0 0115 13ZM3 17V11M9 7.5V17M15 17V11M3 1V11M15 1V11"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Button>
        </div>
      </CardContent>

      <CardFooter>
        <div className="w-80  mx-auto flex items-center relative">
          <Input
            placeholder="search..."
            className="py-4 pr-12 border border-gray-300 rounded-md outline-none
             focus:outline-none focus:ring-2 focus:ring-blue-600 "
          />
          <Button className="bg-blue-500 rounded-full absolute right-3 top-1/2 -translate-y-1/2 size-6">
            <Search className="stroke-white size-4" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}

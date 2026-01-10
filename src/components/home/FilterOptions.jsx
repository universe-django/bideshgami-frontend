import React from "react";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
  SelectValue,
} from "../ui/select";
import { Card, CardContent } from "../ui/card";
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
export default function FilterOptions() {
  return (
    <Card className="w-full relative md:max-w-2xl bg-white shadow-sm border border-gray-200 rounded-2xl -mt-8 p-6 mx-auto">
      <div className="flex flex-col items-center gap-4">
        {/* <!-- Filter Buttons --> */}
        <div className="flex justify-center gap-3 w-full ">
          {/* <!-- Country Dropdown --> */}
          <div className="relative w-40 flex-1 sm:flex-none">
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
          </div>
          <div className="relative w-40 flex-1 sm:flex-none">
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
          </div>
          <div className="flex-none">
            <button className="bg-primary w-full text-white text-sm font-medium py-2 px-4 rounded-lg flex items-center justify-center transition hover:bg-primary/90">
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
            </button>
          </div>
        </div>
        <div className="flex items-center w-full sm:w-[360px] bg-gray-50 rounded-lg shadow-md px-4 py-2 focus-within:ring-2 focus-within:ring-primary/60">
          <input
            type="text"
            placeholder="Search in bideshgami"
            className="flex-1 text-sm text-gray-700 placeholder-gray-400 bg-transparent focus:outline-none"
          />
          <button className="bg-primary text-white p-1.5 rounded-full hover:bg-primary/90 transition">
            <svg
              viewBox="0 0 15 15"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="white"
            >
              <path d="M5.6 1.9a3.7 3.7 0 100 7.4 3.7 3.7 0 000-7.4zm4.6 6.6l3.7 3.7a.7.7 0 01-1 1l-3.7-3.7a5.3 5.3 0 111-1z" />
            </svg>
          </button>
        </div>
      </div>
    </Card>
  );
}

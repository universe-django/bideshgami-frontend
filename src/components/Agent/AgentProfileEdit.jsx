import React from 'react'
import { FileText, ArrowLeft } from "lucide-react";
import profile from "../../assets/profile.png"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectValue,
    SelectLabel,
    SelectItem,
    SelectTrigger,
} from "../ui/select";
import { CameraIcon } from '@/utils/svg-utils';

export default function AgentProfileEdit() {
    const gender = [
        { id: 1, gen: "Male" },
        { id: 2, gen: "Female" },
        { id: 3, gen: "Others" },
    ]

    const station = [
        { id: 1, val: "Dhaka" },
        { id: 2, val: "Cumilla" },
        { id: 3, val: "Chandpur" },
        { id: 4, val: "Rajshahi" },
        { id: 5, val: "Borishal" },
        { id: 6, val: "Rangpur" },
        { id: 7, val: "Dinajpur" },
        { id: 8, val: "Sylet" },
        { id: 9, val: "Chittagong" },
    ]

    const countries = [
        { id: 1, val: "Bangladesh" },
        { id: 2, val: "Canada" },
        { id: 3, val: "US" },
        { id: 4, val: "UK" },
        { id: 5, val: "UAE" },
        { id: 6, val: "Afganistan" },
        { id: 7, val: "Pakistan" },
        { id: 8, val: "India" },
        { id: 9, val: "China" },
    ]

    return (
      <div className="w-full bg-gray-100 ">
        <div className="bg-white rounded-lg p-6">
          <div className="flex items-start gap-4">
            <div className="flex items-center gap-4">
              <img
                src={profile}
                alt="Profile"
                className="w-20 h-20 rounded-full object-cover border"
              />
            </div>
            <div>
              <h1 className="text-sm md:text-xl lg:text-2xl font-semibold mb-2">
                Mahamudul Hasan Fahad
              </h1>
              <button className="flex gap-2 px-2 py-1 text-xs md:text-sm border-2 border-primary text-primary rounded-md hover:bg-blue-100">
                <CameraIcon />
                Upload Photo
              </button>
            </div>
          </div>
          {/* Personal Info */}
          <div className="mt-4 border border-gray-400 rounded-md p-4">
            <h2 className="text-lg font-medium">Personal Details</h2>
            <p className="text-sm text-gray-500">
              As mentioned on your passport or government approved IDs
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-700 mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-600"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-600"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 mb-1">
                  Select Your Gender
                </label>
                <Select>
                  <SelectTrigger className="w-full border border-gray-300 rounded-md py-3 px-4 flex justify-between items-center gap-2">
                    <SelectValue placeholder="Gender" />
                  </SelectTrigger>
                  <SelectContent className="w-full">
                    <SelectGroup>
                      <SelectLabel>Gender</SelectLabel>
                      {gender.map((data) => {
                        return (
                          <SelectItem key={data.id} value={data.gen}>
                            {data.gen}
                          </SelectItem>
                        );
                      })}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 mb-1">
                  Date of Birth
                </label>
                <input
                  type="date"
                  placeholder="Agent/Shop Address"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-600"
                />
              </div>
            </div>
          </div>
          {/* Contact Info */}
          <div className="mt-4 border border-gray-400 rounded-md p-4">
            <h2 className="text-lg font-medium">Contact Details</h2>
            <p className="text-sm text-gray-500">
              Receive booking confirmation &amp; updates
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Contact Number
                </label>
                <div className="w-full flex items-center border border-gray-300 focus-within:border-primary rounded-md px-3 py-1">
                  {/* Country Dropdown */}
                  <div className="flex items-center px-2 border-r bg-gray-50">
                    Ban
                  </div>
                  {/* Country Code */}
                  <span className="px-2 text-gray-700 text-sm">+880</span>
                  {/* Input */}
                  <input
                    type="number"
                    id="phone"
                    placeholder="Enter phone number"
                    className="w-full flex-1 px-2 py-2 text-sm focus:outline-none"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 mb-1">
                  Address
                </label>
                <input
                  type="text"
                  placeholder="Address"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-600"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 mb-1">
                  Setect Your Country
                </label>
                <Select>
                  <SelectTrigger className="w-full border border-gray-300 rounded-md py-3 px-4 flex justify-between items-center gap-2">
                    <SelectValue placeholder="Country" />
                  </SelectTrigger>
                  <SelectContent className="w-full">
                    <SelectGroup>
                      <SelectLabel>Country</SelectLabel>
                      {countries.map((data) => {
                        return (
                          <SelectItem key={data.id} value={data.val}>
                            {data.val}
                          </SelectItem>
                        );
                      })}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700 mb-1">
                  Setect Your District
                </label>
                <Select>
                  <SelectTrigger className="w-full border border-gray-300 rounded-md py-3 px-4 flex justify-between items-center gap-2">
                    <SelectValue placeholder="District" />
                  </SelectTrigger>
                  <SelectContent className="w-full">
                    <SelectGroup>
                      <SelectLabel>District</SelectLabel>
                      {station.map((data) => {
                        return (
                          <SelectItem key={data.id} value={data.val}>
                            {data.val}
                          </SelectItem>
                        );
                      })}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 mb-1">
                  Setect Your Police Station
                </label>
                <Select>
                  <SelectTrigger className="w-full border border-gray-300 rounded-md py-3 px-4 flex justify-between items-center gap-2">
                    <SelectValue placeholder="Police Station" />
                  </SelectTrigger>
                  <SelectContent className="w-full">
                    <SelectGroup>
                      <SelectLabel>Police Station</SelectLabel>
                      {station.map((data) => {
                        return (
                          <SelectItem key={data.id} value={data.val}>
                            {data.val}
                          </SelectItem>
                        );
                      })}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* lest pert-------.  */}

          <div className="bg-white shadow-md mt-20 mx-auto rounded-lg p-6 w-full">
            {/* Header */}
            <h2 className="md:text-3xl text-xl font-semibold mb-2">
              Agent information
            </h2>
            <p className="text-gray-600 text-sm mb-8">
              Travelers holding passport can fill up the below form which will
              save more time during flight booking.
            </p>

            {/* Upload Boxes */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {/* Photo */}

              <div>
                <p className="text-center font-semibold text-gray-600 mb-5">
                  View Your Photo
                </p>
                <div className="border rounded-lg bg-blue-50 hover:bg-blue-100 transition cursor-pointer text-center p-6">
                  <FileText className="mx-auto text-gray-400 mb-2" size={40} />
                  <p className="text-gray-700 font-medium">View Your Photo</p>
                </div>
              </div>

              {/* NID */}
              <div>
                <p className="text-center font-semibold text-gray-600 mb-5">
                  View NID
                </p>
                <div className="border rounded-lg bg-blue-50 hover:bg-blue-100 transition cursor-pointer text-center p-6">
                  <FileText className="mx-auto text-gray-400 mb-2" size={40} />
                  <p className="text-gray-700 font-medium">View NID</p>
                </div>
              </div>

              {/* Trade License */}
              <div>
                <p className="text-center font-semibold text-gray-600 mb-5">
                  View Trade Licance
                </p>
                <div className="border rounded-lg bg-blue-50 hover:bg-blue-100 transition cursor-pointer text-center p-6">
                  <FileText className="mx-auto text-gray-400 mb-2" size={40} />
                  <p className="text-gray-700 font-medium">
                    {" "}
                    View Trade Licance
                  </p>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex justify-center gap-3">
              <button className="flex items-center gap-2 border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-100 transition">
                <ArrowLeft size={16} />
                Back
              </button>
              <button className="border border-blue-500 text-blue-600 px-6 py-2 rounded-md hover:bg-blue-50 transition font-medium">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    );
}
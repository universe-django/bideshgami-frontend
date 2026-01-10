import React from 'react'
import profile from "../../assets/profile.png"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectValue,
    SelectItem,
    SelectTrigger,
    SelectLabel,
} from "../ui/select";
import { CameraIcon } from '@/utils/svg-utils';
import { ArrowLeft } from 'lucide-react';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

export default function AgencyProfileEdit() {
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
        { id: 8, val: "Sylhet" },
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

        <div className="w-full bg-white rounded-lg shadow-sm p-6" >
            <div className="flex items-start gap-4" >
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
                    <Button className="flex gap-2 px-2 py-1 text-xs md:text-sm border-2 border-primaryrounded-md text-white">
                        <CameraIcon />
                        Upload Photo
                    </Button>
                </div>
            </div >
            {/* Personal Info */}
            < div className="mt-4 border border-gray-400 rounded-md p-4" >
                <h2 className="text-lg font-medium">Personal Details</h2>
                <p className="text-sm text-gray-500">
                    As mentioned on your passport or government approved IDs
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <Label className="text-sm font-medium text-gray-700 mb-1">
                            First Name
                        </Label>
                        <Input
                            type="text"
                            placeholder="First Name"
                            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-600"
                        />
                    </div>
                    <div>
                        <Label className="text-sm font-medium text-gray-700 mb-1">
                            Last Name
                        </Label>
                        <Input
                            type="text"
                            placeholder="Last Name"
                            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-600"
                        />
                    </div>
                    <div>
                        <Label className="text-sm font-medium text-gray-700 mb-1">Select Your Gender</Label>
                        <Select>
                            <SelectTrigger className="w-full border border-gray-300 rounded-md py-3 px-4 flex justify-between items-center gap-2">
                                <SelectValue placeholder="Gender" />
                            </SelectTrigger>
                            <SelectContent className="w-full">
                                <SelectGroup>
                                    <SelectLabel>Gender</SelectLabel>
                                    {
                                        gender.map((data) => {
                                            return (
                                                <SelectItem key={data.id} value={data.gen}>
                                                    {data.gen}
                                                </SelectItem>
                                            )
                                        })
                                    }
                                </SelectGroup>
                            </SelectContent>
                        </Select>

                    </div>
                    <div>
                        <Label className="text-sm font-medium text-gray-700 mb-1">
                            Date of Birth
                        </Label>
                        <Input
                            type="date"
                            placeholder="Agent/Shop Address"
                            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-600"
                        />
                    </div>
                </div>
            </div >
            {/* Contact Info */}
            < div className="mt-4 border border-gray-400 rounded-md p-4" >
                <h2 className="text-lg font-medium">Contact Details</h2>
                <p className="text-sm text-gray-500">
                    Receive booking confirmation &amp; updates
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <Label
                            htmlFor="phone"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Contact Number
                        </Label>
                        <div className="w-full flex items-center border border-gray-300 focus-within:border-primary rounded-md px-3 py-1">
                            {/* Country Dropdown */}
                            <div className="flex items-center px-2 border-r bg-gray-50">
                                Ban
                            </div>
                            {/* Country Code */}
                            <span className="px-2 text-gray-700 text-sm">+880</span>
                            {/* Input */}
                            <Input
                                type="number"
                                id="phone"
                                placeholder="Enter phone number"
                                className="w-full flex-1 px-2 py-2 text-sm focus:outline-none"
                            />
                        </div>
                    </div>
                    <div>
                        <Label className="text-sm font-medium text-gray-700 mb-1">
                            Address
                        </Label>
                        <Input
                            type="text"
                            placeholder="Address"
                            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-600"
                        />
                    </div>
                    <div>
                        <Label className="text-sm font-medium text-gray-700 mb-1">Setect Your Country</Label>
                        <Select>
                            <SelectTrigger className="w-full border border-gray-300 rounded-md py-3 px-4 flex justify-between items-center gap-2">
                                <SelectValue placeholder="Country" />
                            </SelectTrigger>
                            <SelectContent className="w-full">
                                <SelectGroup>
                                    <SelectLabel>Country</SelectLabel>
                                    {
                                        countries.map((data) => {
                                            return (
                                                <SelectItem key={data.id} value={data.val}>
                                                    {data.val}
                                                </SelectItem>
                                            )
                                        })
                                    }
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>


                    <div>
                        <Label className="text-sm font-medium text-gray-700 mb-1">Setect Your District</Label>
                        <Select>
                            <SelectTrigger className="w-full border border-gray-300 rounded-md py-3 px-4 flex justify-between items-center gap-2">
                                <SelectValue placeholder="District" />
                            </SelectTrigger>
                            <SelectContent className="w-full">
                                <SelectGroup>
                                    <SelectLabel>District</SelectLabel>
                                    {
                                        station.map((data) => {
                                            return (
                                                <SelectItem key={data.id} value={data.val}>
                                                    {data.val}
                                                </SelectItem>
                                            )
                                        })
                                    }
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                    <div>
                        <label className="text-sm font-medium text-gray-700 mb-1">Setect Your Police Station</label>
                        <Select>
                            <SelectTrigger className="w-full border border-gray-300 rounded-md py-3 px-4 flex justify-between items-center gap-2">
                                <SelectValue placeholder="Police Station" />
                            </SelectTrigger>
                            <SelectContent className="w-full">
                                <SelectGroup>
                                    <SelectLabel>Police Station</SelectLabel>
                                    {
                                        station.map((data) => {
                                            return (
                                                <SelectItem key={data.id} value={data.val}>
                                                    {data.val}
                                                </SelectItem>
                                            )
                                        })
                                    }
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
            </div >
            {/* Passport Info */}
            < div className="mt-4 border border-gray-400 rounded-md p-4" >
                <h2 className="text-lg font-medium">Passpost infomation</h2>
                <p className="text-sm text-gray-500">
                    Travelers holding passport can fill up the the below form which will
                    save more time during flight booking.{" "}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="text-sm font-medium text-gray-700 mb-1">
                            Passport Number
                        </label>
                        <Input
                            type="number"
                            placeholder="Passport Number"
                            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-600"
                        />
                    </div>
                    <div>
                        <label className="text-sm font-medium text-gray-700 mb-1">
                            Passport Expiry Date
                        </label>
                        <Input
                            type="date"
                            placeholder="Passport Number"
                            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-600"
                        />
                    </div>
                    <div>
                        <label className="text-sm font-medium text-gray-700 mb-1">
                            Passport Issue Date
                        </label>
                        <Input
                            type="date"
                            placeholder="Passport Number"
                            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-600"
                        />
                    </div>
                </div>
            </div >
            <div className="flex justify-center gap-4 mt-8">
                <Button className="flex items-center gap-1 px-2 py-1 text-sm border-2 rounded-md">
                    <ArrowLeft size={20} />
                    Back
                </Button>
                <Button className="flex gap-2 px-4 py-1 text-sm border-2 border-primary rounded-md">
                    save
                </Button>
            </div>
        </div >
    )
}
import React from "react";
import profile from "../../assets/profile.png";
import { WriteIcon } from "@/utils/svg-utils";
import { Link } from "react-router";

export default function AgentProfile() {
  return (
    <div className="flex-1 flex flex-col md:flex-row gap-4">
      <div className="w-full bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img
              src={profile}
              alt="Profile"
              className="w-20 h-20 rounded-full object-cover border"
            />
            <h1 className="text-2xl font-semibold">Mahamudul Hasan Fahad</h1>
          </div>
          <Link to={"/agent/dashboard/profile-edit"}>
            <button className="flex gap-2 px-4 py-2 text-sm border-2 rounded-md hover:bg-gray-100">
              <WriteIcon />
              Edit
            </button>
          </Link>
        </div>
        {/* Personal Details */}
        <div className="mt-6">
          <h2 className="text-lg font-medium">Personal Details</h2>
          <p className="text-sm text-gray-500">
            As mentioned on your passport or government approved IDs
          </p>
        </div>
        {/* Basic Info */}
        <div className="mt-4 border border-gray-400 rounded-md p-4">
          <h3 className="font-medium text-gray-700 mb-3">Basic Info</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3">
            <p className="text-gray-600">Name</p>
            <p className="text-gray-800">Your Name</p>
            <p className="text-gray-600">Birthday</p>
            <p className="text-gray-400">----------------------------</p>
          </div>
        </div>
        {/* Contact Info */}
        <div className="mt-4 border border-gray-400 rounded-md p-4">
          <h3 className="font-medium text-gray-700 mb-3">Contact Info</h3>
          <div className="grid grid-cols-2 gap-y-3">
            <p className="text-gray-600">Email Address</p>
            <p className="text-gray-800">you@gmail.com</p>
            <p className="text-gray-600">Phone Number</p>
            <p className="text-gray-400">----------------------------</p>
            <p className="text-gray-600">Address</p>
            <p className="text-gray-400">----------------------------</p>
            <p className="text-gray-600">City</p>
            <p className="text-gray-400">----------------------------</p>
            <p className="text-gray-600">Country</p>
            <p className="text-gray-400">----------------------------</p>
            <p className="text-gray-600">District</p>
            <p className="text-gray-400">----------------------------</p>
          </div>
        </div>
        {/* Passport Info */}
        <div className="mt-4 border border-gray-400 rounded-md p-4">
          <h3 className="font-medium text-gray-700 mb-3">Passport Info</h3>
          <div className="grid grid-cols-2 gap-y-3">
            <p className="text-gray-600">Passport Number</p>
            <p className="text-gray-800">xxxxxxxxxxxxxxx</p>
            <p className="text-gray-600">Passport Expiry Date</p>
            <p className="text-gray-400">----------------------------</p>
            <p className="text-gray-600">Passport Issue Date</p>
            <p className="text-gray-400">----------------------------</p>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ChevronDown, ChevronUp, Plane, Printer } from "lucide-react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../ui/pagination";
export default function TicketCard() {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="bg-gray-100  w-full">
      <div className="w-full space-y-5">
        <Card className="shadow-md w-full">
          {/* Top Blue Header */}
          <div className="bg-blue-600 -mt-6 rounded-t-lg text-white flex flex-col sm:flex-row justify-between items-start sm:items-center px-3 sm:px-5 py-4 gap-3 sm:gap-2">
            <div className="flex items-center gap-3">
              <div className="flex justify-start items-center gap-2">
                <div className="h-10 w-10 sm:w-12 rounded-md bg-white p-2 flex items-center justify-center">
                  <img src="/src/assets/TiketLogo.png" alt="" />
                </div>
                <h2 className="text-xs sm:text-sm font-semibold leading-tight">
                  Biman Bangladesh <br /> Airlines
                </h2>
              </div>
            </div>

            <div className="text-left sm:text-center w-full sm:w-auto">
              <p className="text-xs sm:text-sm">
                Ticket Status:{" "}
                <span className="text-yellow-300 font-semibold">Pending</span>
              </p>
              <p className="text-xs text-gray-100">
                Booking ID: <span className="font-medium">Bd01RYJ7953</span>
              </p>
              <p className="text-xs text-gray-100">Last Ticketing Date: --</p>
            </div>

            <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between sm:justify-start w-full sm:w-auto gap-2">
              <p className="text-xl sm:text-2xl font-semibold">BDT 2982</p>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  className="text-red-700 rounded-sm bg-white hover:bg-red-50 text-xs sm:text-sm px-2 sm:px-3 py-1 h-8"
                >
                  Unpaid
                </Button>
                <Button
                  variant="outline"
                  className="text-red-400 rounded-sm bg-white hover:bg-red-50 text-xs sm:text-sm px-2 sm:px-3 py-1 h-8"
                >
                  Pay Now
                </Button>
              </div>
            </div>
          </div>

          {/* Ticket Details */}
          <CardContent className="p-3 sm:p-4 text-xs sm:text-sm text-gray-700">
            <div className="flex flex-col lg:flex-row justify-between gap-4">
              {/* Left Column */}
              <div className="space-y-1">
                <p>
                  <span className="font-semibold">Passenger Name:</span>{" "}
                  <span className="text-blue-700 font-medium">
                    Mr Nejam Uddin
                  </span>
                </p>
                <p>
                  <span className="font-semibold">Booked Date:</span> Tue, 15
                  Apr 2025 12:57
                </p>
                <p>
                  <span className="font-semibold">Flight Date:</span> Tue, 15
                  Apr 2025 16:35
                </p>
                <p>
                  <span className="font-semibold">Trip Type:</span> Oneway
                </p>
              </div>

              {/* Middle Column */}
              <div className="flex flex-col items-center justify-center lg:border-l lg:border-r border-blue-500 lg:px-8 py-2 lg:py-0">
                <p className="font-semibold text-gray-500 text-center text-xs sm:text-sm">
                  Biman Bangladesh Airlines BG
                </p>
                <div className="flex items-center gap-2 text-xs sm:text-sm mt-2">
                  <span className="text-gray-700 font-medium">Dhaka</span>

                  <div className="mx-2 w-32 sm:w-40 text-center">
                    <div className="flex justify-between flex-col gap-1">
                      <p className="text-gray-500 text-xs w-full">
                        1 hour 0 minute
                      </p>
                      <Separator className="border-t border-gray-300" />
                      <p className="text-gray-500 text-xs w-full font-semibold">
                        Non Stop
                      </p>
                    </div>
                  </div>
                  <span className="text-gray-700 font-medium">Chittagong</span>
                </div>
                <p className="mt-2 font-semibold text-gray-800 text-xs sm:text-sm">
                  Passenger: <span className="text-gray-500">1 Adult</span>
                </p>
              </div>

              {/* Right Column */}
              <div className="space-y-1">
                <p>
                  <span className="font-semibold">PNR:</span>{" "}
                  <span className="text-blue-600 font-medium">BG-VVFJZP</span>
                </p>
                <p>
                  <span className="font-semibold">Airline Reference:</span>{" "}
                  ------
                </p>
                <p>
                  <span className="font-semibold">Tickets No:</span> ----------
                </p>
                <p>
                  <span className="font-semibold">Flight No:</span> ----------
                </p>
              </div>
            </div>

            {/* View Details Button */}

            <Button
              variant="ghost"
              onClick={() => setShowDetails(!showDetails)}
              className="text-blue-600 mt-5  hover:text-blue-700 hover:bg-blue-50 font-medium flex items-center gap-2 text-xs sm:text-sm px-0"
            >
              {showDetails ? "Hide Details" : "View Details"}
              {showDetails ? (
                <ChevronUp size={16} />
              ) : (
                <ChevronDown size={16} />
              )}
            </Button>

            {/* Expandable Details Section */}
            {showDetails && (
              <div className="mt-4 space-y-4 animate-in slide-in-from-top-2 duration-300">
                <Separator />

                {/* Passenger Name Section */}
                <div className="bg-slate-50 p-3 rounded-md border border-slate-200">
                  <h3 className="font-semibold text-sm mb-2 text-slate-700">
                    Passenger Name
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600">
                    Mr Nejam Uddin
                  </p>
                </div>

                {/* PNR and Air Ref Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="bg-slate-50 p-3 rounded-md border border-slate-200">
                    <h3 className="font-semibold text-sm mb-1 text-slate-700">
                      PNR
                    </h3>
                    <p className="text-blue-600 font-medium text-xs sm:text-sm">
                      VYFJP
                    </p>
                  </div>
                  <div className="bg-slate-50 p-3 rounded-md border border-slate-200">
                    <h3 className="font-semibold text-sm mb-1 text-slate-700">
                      Air Ref
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600">-------</p>
                  </div>
                </div>

                {/* Issued Date */}
                <div className="bg-slate-50 p-3 rounded-md border border-slate-200">
                  <h3 className="font-semibold text-sm mb-1 text-slate-700">
                    Issued Date
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600">--</p>
                </div>

                {/* Flight Summary */}
                <div className="border border-slate-200 rounded-lg p-4 bg-white shadow-sm">
                  <h3 className="font-semibold text-sm mb-3 text-slate-800">
                    Flight summary
                  </h3>

                  {/* Date Header */}
                  <div className="bg-blue-50 px-3 py-2 rounded-md mb-4 border border-blue-100">
                    <p className="font-semibold text-xs sm:text-sm text-blue-900">
                      April 15th, 2025 (Dhaka - Chittagong)
                    </p>
                  </div>

                  {/* Flight Route Visual */}
                  <div className="flex flex-col sm:flex-row items-center justify-between mb-4 gap-4">
                    <div className="flex items-center gap-3">
                      <div className="bg-red-600 rounded-full p-2 sm:p-3">
                        <Plane className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-xs text-slate-500">
                          Depart
                        </p>
                        <p className="text-lg sm:text-xl font-bold text-slate-900">
                          16:35
                        </p>
                        <p className="text-xs text-slate-600">Dhaka</p>
                      </div>
                    </div>

                    <div className="flex-1 w-full sm:w-auto sm:mx-4 text-center">
                      <p className="text-xs text-slate-500 mb-2">
                        1 hour 0 minute
                      </p>
                      <div className="relative">
                        <Separator className="bg-slate-300" />
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-white px-2">
                          <span className="text-xs text-slate-600 font-medium">
                            Non Stop
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div>
                        <p className="font-semibold text-xs text-slate-500">
                          Arrive
                        </p>
                        <p className="text-lg sm:text-xl font-bold text-slate-900">
                          17:35
                        </p>
                        <p className="text-xs text-slate-600">Chittagong</p>
                      </div>
                    </div>

                    <div className="text-center sm:text-right sm:ml-4 w-full sm:w-auto">
                      <p className="font-semibold text-xs text-slate-500">
                        Total Price
                      </p>
                      <p className="text-lg sm:text-xl font-bold text-blue-600">
                        BDT 2,982
                      </p>
                    </div>
                  </div>

                  {/* Biman Bangladesh Airlines Info */}
                  <div className="text-xs text-slate-600 mb-3">
                    <p>Biman Bangladesh Airlines</p>
                  </div>

                  {/* Itinerary Details */}
                  <div className="bg-blue-50 rounded-md p-4 border border-blue-100">
                    <h4 className="font-semibold text-sm mb-3 text-blue-900">
                      Itinerary Details
                    </h4>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
                      <div>
                        <p className="text-slate-500 mb-1 font-medium">
                          Flight
                        </p>
                        <p className="font-semibold text-slate-900">BG-147</p>
                      </div>
                      <div>
                        <p className="text-slate-500 mb-1 font-medium">
                          Departure
                        </p>
                        <p className="font-semibold text-slate-900">DAC</p>
                        <p className="text-slate-600 text-xs">
                          (Hazrat Shahjalal Intl Airport)
                        </p>
                      </div>
                      <div>
                        <p className="text-slate-500 mb-1 font-medium">
                          Arrival
                        </p>
                        <p className="font-semibold text-slate-900">CGP</p>
                        <p className="text-slate-600 text-xs">(Patenga)</p>
                      </div>
                      <div>
                        <p className="text-slate-500 mb-1 font-medium">
                          Status
                        </p>
                        <p className="text-yellow-600 font-semibold">Pending</p>
                      </div>
                    </div>

                    <Separator className="my-3 bg-blue-200" />

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                      <div>
                        <p className="text-slate-500 mb-1 font-medium">
                          Operating
                        </p>
                        <p className="font-semibold text-slate-900">
                          Economy (Cl-Class)
                        </p>
                      </div>
                      <div>
                        <p className="text-slate-500 mb-1 font-medium">
                          Baggage
                        </p>
                        <p className="text-slate-700">
                          Checkin:{" "}
                          <span className="font-semibold">20 Kg(s)</span>
                        </p>
                        <p className="text-slate-700">
                          Cabin: <span className="font-semibold">7 Kg(s)</span>
                        </p>
                      </div>
                    </div>

                    <Separator className="my-3 bg-blue-200" />

                    <div className="text-xs space-y-1 text-slate-600">
                      <p>
                        <span className="font-medium">Aircraft:</span> Boeing
                        777-300
                      </p>
                      <p>
                        <span className="font-medium">Departure Time:</span>{" "}
                        16:35, Tue 15 Apr 2025
                      </p>
                      <p>
                        <span className="font-medium">Arrival Time:</span>{" "}
                        17:35, Tue 15 Apr 2025
                      </p>
                      <p>
                        <span className="font-medium">Duration:</span> 1 hour 0
                        minute
                      </p>
                    </div>
                  </div>

                  {/* Print Button */}
                  <div className="mt-4 flex justify-end">
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm px-4 py-2 flex items-center gap-2">
                      <Printer size={16} />
                      Print
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
        <Card className="shadow-md w-full">
          {/* Top Blue Header */}
          <div className="bg-blue-600 -mt-6 rounded-t-lg text-white flex flex-col sm:flex-row justify-between items-start sm:items-center px-3 sm:px-5 py-4 gap-3 sm:gap-2">
            <div className="flex items-center gap-3">
              <div className="flex justify-start items-center gap-2">
                <div className="h-10 w-10 sm:w-12 rounded-md bg-white p-2 flex items-center justify-center">
                  <img src="/src/assets/TiketLogo.png" alt="" />
                </div>
                <h2 className="text-xs sm:text-sm font-semibold leading-tight">
                  Biman Bangladesh <br /> Airlines
                </h2>
              </div>
            </div>

            <div className="text-left sm:text-center w-full sm:w-auto">
              <p className="text-xs sm:text-sm">
                Ticket Status:{" "}
                <span className="text-yellow-300 font-semibold">Pending</span>
              </p>
              <p className="text-xs text-gray-100">
                Booking ID: <span className="font-medium">Bd01RYJ7953</span>
              </p>
              <p className="text-xs text-gray-100">Last Ticketing Date: --</p>
            </div>

            <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between sm:justify-start w-full sm:w-auto gap-2">
              <p className="text-xl sm:text-2xl font-semibold">BDT 2982</p>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  className="text-red-700 rounded-sm bg-white hover:bg-red-50 text-xs sm:text-sm px-2 sm:px-3 py-1 h-8"
                >
                  Unpaid
                </Button>
                <Button
                  variant="outline"
                  className="text-red-400 rounded-sm bg-white hover:bg-red-50 text-xs sm:text-sm px-2 sm:px-3 py-1 h-8"
                >
                  Pay Now
                </Button>
              </div>
            </div>
          </div>

          {/* Ticket Details */}
          <CardContent className="p-3 sm:p-4 text-xs sm:text-sm text-gray-700">
            <div className="flex flex-col lg:flex-row justify-between gap-4">
              {/* Left Column */}
              <div className="space-y-1">
                <p>
                  <span className="font-semibold">Passenger Name:</span>{" "}
                  <span className="text-blue-700 font-medium">
                    Mr Nejam Uddin
                  </span>
                </p>
                <p>
                  <span className="font-semibold">Booked Date:</span> Tue, 15
                  Apr 2025 12:57
                </p>
                <p>
                  <span className="font-semibold">Flight Date:</span> Tue, 15
                  Apr 2025 16:35
                </p>
                <p>
                  <span className="font-semibold">Trip Type:</span> Oneway
                </p>
              </div>

              {/* Middle Column */}
              <div className="flex flex-col items-center justify-center lg:border-l lg:border-r border-blue-500 lg:px-8 py-2 lg:py-0">
                <p className="font-semibold text-gray-500 text-center text-xs sm:text-sm">
                  Biman Bangladesh Airlines BG
                </p>
                <div className="flex items-center gap-2 text-xs sm:text-sm mt-2">
                  <span className="text-gray-700 font-medium">Dhaka</span>

                  <div className="mx-2 w-32 sm:w-40 text-center">
                    <div className="flex justify-between flex-col gap-1">
                      <p className="text-gray-500 text-xs w-full">
                        1 hour 0 minute
                      </p>
                      <Separator className="border-t border-gray-300" />
                      <p className="text-gray-500 text-xs w-full font-semibold">
                        Non Stop
                      </p>
                    </div>
                  </div>
                  <span className="text-gray-700 font-medium">Chittagong</span>
                </div>
                <p className="mt-2 font-semibold text-gray-800 text-xs sm:text-sm">
                  Passenger: <span className="text-gray-500">1 Adult</span>
                </p>
              </div>

              {/* Right Column */}
              <div className="space-y-1">
                <p>
                  <span className="font-semibold">PNR:</span>{" "}
                  <span className="text-blue-600 font-medium">BG-VVFJZP</span>
                </p>
                <p>
                  <span className="font-semibold">Airline Reference:</span>{" "}
                  ------
                </p>
                <p>
                  <span className="font-semibold">Tickets No:</span> ----------
                </p>
                <p>
                  <span className="font-semibold">Flight No:</span> ----------
                </p>
              </div>
            </div>

            {/* View Details Button */}

            <Button
              variant="ghost"
              onClick={() => setShowDetails(!showDetails)}
              className="text-blue-600 mt-5  hover:text-blue-700 hover:bg-blue-50 font-medium flex items-center gap-2 text-xs sm:text-sm px-0"
            >
              {showDetails ? "Hide Details" : "View Details"}
              {showDetails ? (
                <ChevronUp size={16} />
              ) : (
                <ChevronDown size={16} />
              )}
            </Button>

            {/* Expandable Details Section */}
            {showDetails && (
              <div className="mt-4 space-y-4 animate-in slide-in-from-top-2 duration-300">
                <Separator />

                {/* Passenger Name Section */}
                <div className="bg-slate-50 p-3 rounded-md border border-slate-200">
                  <h3 className="font-semibold text-sm mb-2 text-slate-700">
                    Passenger Name
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600">
                    Mr Nejam Uddin
                  </p>
                </div>

                {/* PNR and Air Ref Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="bg-slate-50 p-3 rounded-md border border-slate-200">
                    <h3 className="font-semibold text-sm mb-1 text-slate-700">
                      PNR
                    </h3>
                    <p className="text-blue-600 font-medium text-xs sm:text-sm">
                      VYFJP
                    </p>
                  </div>
                  <div className="bg-slate-50 p-3 rounded-md border border-slate-200">
                    <h3 className="font-semibold text-sm mb-1 text-slate-700">
                      Air Ref
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600">-------</p>
                  </div>
                </div>

                {/* Issued Date */}
                <div className="bg-slate-50 p-3 rounded-md border border-slate-200">
                  <h3 className="font-semibold text-sm mb-1 text-slate-700">
                    Issued Date
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600">--</p>
                </div>

                {/* Flight Summary */}
                <div className="border border-slate-200 rounded-lg p-4 bg-white shadow-sm">
                  <h3 className="font-semibold text-sm mb-3 text-slate-800">
                    Flight summary
                  </h3>

                  {/* Date Header */}
                  <div className="bg-blue-50 px-3 py-2 rounded-md mb-4 border border-blue-100">
                    <p className="font-semibold text-xs sm:text-sm text-blue-900">
                      April 15th, 2025 (Dhaka - Chittagong)
                    </p>
                  </div>

                  {/* Flight Route Visual */}
                  <div className="flex flex-col sm:flex-row items-center justify-between mb-4 gap-4">
                    <div className="flex items-center gap-3">
                      <div className="bg-red-600 rounded-full p-2 sm:p-3">
                        <Plane className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-xs text-slate-500">
                          Depart
                        </p>
                        <p className="text-lg sm:text-xl font-bold text-slate-900">
                          16:35
                        </p>
                        <p className="text-xs text-slate-600">Dhaka</p>
                      </div>
                    </div>

                    <div className="flex-1 w-full sm:w-auto sm:mx-4 text-center">
                      <p className="text-xs text-slate-500 mb-2">
                        1 hour 0 minute
                      </p>
                      <div className="relative">
                        <Separator className="bg-slate-300" />
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-white px-2">
                          <span className="text-xs text-slate-600 font-medium">
                            Non Stop
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div>
                        <p className="font-semibold text-xs text-slate-500">
                          Arrive
                        </p>
                        <p className="text-lg sm:text-xl font-bold text-slate-900">
                          17:35
                        </p>
                        <p className="text-xs text-slate-600">Chittagong</p>
                      </div>
                    </div>

                    <div className="text-center sm:text-right sm:ml-4 w-full sm:w-auto">
                      <p className="font-semibold text-xs text-slate-500">
                        Total Price
                      </p>
                      <p className="text-lg sm:text-xl font-bold text-blue-600">
                        BDT 2,982
                      </p>
                    </div>
                  </div>

                  {/* Biman Bangladesh Airlines Info */}
                  <div className="text-xs text-slate-600 mb-3">
                    <p>Biman Bangladesh Airlines</p>
                  </div>

                  {/* Itinerary Details */}
                  <div className="bg-blue-50 rounded-md p-4 border border-blue-100">
                    <h4 className="font-semibold text-sm mb-3 text-blue-900">
                      Itinerary Details
                    </h4>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
                      <div>
                        <p className="text-slate-500 mb-1 font-medium">
                          Flight
                        </p>
                        <p className="font-semibold text-slate-900">BG-147</p>
                      </div>
                      <div>
                        <p className="text-slate-500 mb-1 font-medium">
                          Departure
                        </p>
                        <p className="font-semibold text-slate-900">DAC</p>
                        <p className="text-slate-600 text-xs">
                          (Hazrat Shahjalal Intl Airport)
                        </p>
                      </div>
                      <div>
                        <p className="text-slate-500 mb-1 font-medium">
                          Arrival
                        </p>
                        <p className="font-semibold text-slate-900">CGP</p>
                        <p className="text-slate-600 text-xs">(Patenga)</p>
                      </div>
                      <div>
                        <p className="text-slate-500 mb-1 font-medium">
                          Status
                        </p>
                        <p className="text-yellow-600 font-semibold">Pending</p>
                      </div>
                    </div>

                    <Separator className="my-3 bg-blue-200" />

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                      <div>
                        <p className="text-slate-500 mb-1 font-medium">
                          Operating
                        </p>
                        <p className="font-semibold text-slate-900">
                          Economy (Cl-Class)
                        </p>
                      </div>
                      <div>
                        <p className="text-slate-500 mb-1 font-medium">
                          Baggage
                        </p>
                        <p className="text-slate-700">
                          Checkin:{" "}
                          <span className="font-semibold">20 Kg(s)</span>
                        </p>
                        <p className="text-slate-700">
                          Cabin: <span className="font-semibold">7 Kg(s)</span>
                        </p>
                      </div>
                    </div>

                    <Separator className="my-3 bg-blue-200" />

                    <div className="text-xs space-y-1 text-slate-600">
                      <p>
                        <span className="font-medium">Aircraft:</span> Boeing
                        777-300
                      </p>
                      <p>
                        <span className="font-medium">Departure Time:</span>{" "}
                        16:35, Tue 15 Apr 2025
                      </p>
                      <p>
                        <span className="font-medium">Arrival Time:</span>{" "}
                        17:35, Tue 15 Apr 2025
                      </p>
                      <p>
                        <span className="font-medium">Duration:</span> 1 hour 0
                        minute
                      </p>
                    </div>
                  </div>

                  {/* Print Button */}
                  <div className="mt-4 flex justify-end">
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm px-4 py-2 flex items-center gap-2">
                      <Printer size={16} />
                      Print
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
        <Card className="shadow-md w-full">
          {/* Top Blue Header */}
          <div className="bg-blue-600 -mt-6 rounded-t-lg text-white flex flex-col sm:flex-row justify-between items-start sm:items-center px-3 sm:px-5 py-4 gap-3 sm:gap-2">
            <div className="flex items-center gap-3">
              <div className="flex justify-start items-center gap-2">
                <div className="h-10 w-10 sm:w-12 rounded-md bg-white p-2 flex items-center justify-center">
                  <img src="/src/assets/TiketLogo.png" alt="" />
                </div>
                <h2 className="text-xs sm:text-sm font-semibold leading-tight">
                  Biman Bangladesh <br /> Airlines
                </h2>
              </div>
            </div>

            <div className="text-left sm:text-center w-full sm:w-auto">
              <p className="text-xs sm:text-sm">
                Ticket Status:{" "}
                <span className="text-yellow-300 font-semibold">Pending</span>
              </p>
              <p className="text-xs text-gray-100">
                Booking ID: <span className="font-medium">Bd01RYJ7953</span>
              </p>
              <p className="text-xs text-gray-100">Last Ticketing Date: --</p>
            </div>

            <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between sm:justify-start w-full sm:w-auto gap-2">
              <p className="text-xl sm:text-2xl font-semibold">BDT 2982</p>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  className="text-red-700 rounded-sm bg-white hover:bg-red-50 text-xs sm:text-sm px-2 sm:px-3 py-1 h-8"
                >
                  Unpaid
                </Button>
                <Button
                  variant="outline"
                  className="text-red-400 rounded-sm bg-white hover:bg-red-50 text-xs sm:text-sm px-2 sm:px-3 py-1 h-8"
                >
                  Pay Now
                </Button>
              </div>
            </div>
          </div>

          {/* Ticket Details */}
          <CardContent className="p-3 sm:p-4 text-xs sm:text-sm text-gray-700">
            <div className="flex flex-col lg:flex-row justify-between gap-4">
              {/* Left Column */}
              <div className="space-y-1">
                <p>
                  <span className="font-semibold">Passenger Name:</span>{" "}
                  <span className="text-blue-700 font-medium">
                    Mr Nejam Uddin
                  </span>
                </p>
                <p>
                  <span className="font-semibold">Booked Date:</span> Tue, 15
                  Apr 2025 12:57
                </p>
                <p>
                  <span className="font-semibold">Flight Date:</span> Tue, 15
                  Apr 2025 16:35
                </p>
                <p>
                  <span className="font-semibold">Trip Type:</span> Oneway
                </p>
              </div>

              {/* Middle Column */}
              <div className="flex flex-col items-center justify-center lg:border-l lg:border-r border-blue-500 lg:px-8 py-2 lg:py-0">
                <p className="font-semibold text-gray-500 text-center text-xs sm:text-sm">
                  Biman Bangladesh Airlines BG
                </p>
                <div className="flex items-center gap-2 text-xs sm:text-sm mt-2">
                  <span className="text-gray-700 font-medium">Dhaka</span>

                  <div className="mx-2 w-32 sm:w-40 text-center">
                    <div className="flex justify-between flex-col gap-1">
                      <p className="text-gray-500 text-xs w-full">
                        1 hour 0 minute
                      </p>
                      <Separator className="border-t border-gray-300" />
                      <p className="text-gray-500 text-xs w-full font-semibold">
                        Non Stop
                      </p>
                    </div>
                  </div>
                  <span className="text-gray-700 font-medium">Chittagong</span>
                </div>
                <p className="mt-2 font-semibold text-gray-800 text-xs sm:text-sm">
                  Passenger: <span className="text-gray-500">1 Adult</span>
                </p>
              </div>

              {/* Right Column */}
              <div className="space-y-1">
                <p>
                  <span className="font-semibold">PNR:</span>{" "}
                  <span className="text-blue-600 font-medium">BG-VVFJZP</span>
                </p>
                <p>
                  <span className="font-semibold">Airline Reference:</span>{" "}
                  ------
                </p>
                <p>
                  <span className="font-semibold">Tickets No:</span> ----------
                </p>
                <p>
                  <span className="font-semibold">Flight No:</span> ----------
                </p>
              </div>
            </div>

            {/* View Details Button */}

            <Button
              variant="ghost"
              onClick={() => setShowDetails(!showDetails)}
              className="text-blue-600 mt-5  hover:text-blue-700 hover:bg-blue-50 font-medium flex items-center gap-2 text-xs sm:text-sm px-0"
            >
              {showDetails ? "Hide Details" : "View Details"}
              {showDetails ? (
                <ChevronUp size={16} />
              ) : (
                <ChevronDown size={16} />
              )}
            </Button>

            {/* Expandable Details Section */}
            {showDetails && (
              <div className="mt-4 space-y-4 animate-in slide-in-from-top-2 duration-300">
                <Separator />

                {/* Passenger Name Section */}
                <div className="bg-slate-50 p-3 rounded-md border border-slate-200">
                  <h3 className="font-semibold text-sm mb-2 text-slate-700">
                    Passenger Name
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600">
                    Mr Nejam Uddin
                  </p>
                </div>

                {/* PNR and Air Ref Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="bg-slate-50 p-3 rounded-md border border-slate-200">
                    <h3 className="font-semibold text-sm mb-1 text-slate-700">
                      PNR
                    </h3>
                    <p className="text-blue-600 font-medium text-xs sm:text-sm">
                      VYFJP
                    </p>
                  </div>
                  <div className="bg-slate-50 p-3 rounded-md border border-slate-200">
                    <h3 className="font-semibold text-sm mb-1 text-slate-700">
                      Air Ref
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600">-------</p>
                  </div>
                </div>

                {/* Issued Date */}
                <div className="bg-slate-50 p-3 rounded-md border border-slate-200">
                  <h3 className="font-semibold text-sm mb-1 text-slate-700">
                    Issued Date
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600">--</p>
                </div>

                {/* Flight Summary */}
                <div className="border border-slate-200 rounded-lg p-4 bg-white shadow-sm">
                  <h3 className="font-semibold text-sm mb-3 text-slate-800">
                    Flight summary
                  </h3>

                  {/* Date Header */}
                  <div className="bg-blue-50 px-3 py-2 rounded-md mb-4 border border-blue-100">
                    <p className="font-semibold text-xs sm:text-sm text-blue-900">
                      April 15th, 2025 (Dhaka - Chittagong)
                    </p>
                  </div>

                  {/* Flight Route Visual */}
                  <div className="flex flex-col sm:flex-row items-center justify-between mb-4 gap-4">
                    <div className="flex items-center gap-3">
                      <div className="bg-red-600 rounded-full p-2 sm:p-3">
                        <Plane className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-xs text-slate-500">
                          Depart
                        </p>
                        <p className="text-lg sm:text-xl font-bold text-slate-900">
                          16:35
                        </p>
                        <p className="text-xs text-slate-600">Dhaka</p>
                      </div>
                    </div>

                    <div className="flex-1 w-full sm:w-auto sm:mx-4 text-center">
                      <p className="text-xs text-slate-500 mb-2">
                        1 hour 0 minute
                      </p>
                      <div className="relative">
                        <Separator className="bg-slate-300" />
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-white px-2">
                          <span className="text-xs text-slate-600 font-medium">
                            Non Stop
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div>
                        <p className="font-semibold text-xs text-slate-500">
                          Arrive
                        </p>
                        <p className="text-lg sm:text-xl font-bold text-slate-900">
                          17:35
                        </p>
                        <p className="text-xs text-slate-600">Chittagong</p>
                      </div>
                    </div>

                    <div className="text-center sm:text-right sm:ml-4 w-full sm:w-auto">
                      <p className="font-semibold text-xs text-slate-500">
                        Total Price
                      </p>
                      <p className="text-lg sm:text-xl font-bold text-blue-600">
                        BDT 2,982
                      </p>
                    </div>
                  </div>

                  {/* Biman Bangladesh Airlines Info */}
                  <div className="text-xs text-slate-600 mb-3">
                    <p>Biman Bangladesh Airlines</p>
                  </div>

                  {/* Itinerary Details */}
                  <div className="bg-blue-50 rounded-md p-4 border border-blue-100">
                    <h4 className="font-semibold text-sm mb-3 text-blue-900">
                      Itinerary Details
                    </h4>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
                      <div>
                        <p className="text-slate-500 mb-1 font-medium">
                          Flight
                        </p>
                        <p className="font-semibold text-slate-900">BG-147</p>
                      </div>
                      <div>
                        <p className="text-slate-500 mb-1 font-medium">
                          Departure
                        </p>
                        <p className="font-semibold text-slate-900">DAC</p>
                        <p className="text-slate-600 text-xs">
                          (Hazrat Shahjalal Intl Airport)
                        </p>
                      </div>
                      <div>
                        <p className="text-slate-500 mb-1 font-medium">
                          Arrival
                        </p>
                        <p className="font-semibold text-slate-900">CGP</p>
                        <p className="text-slate-600 text-xs">(Patenga)</p>
                      </div>
                      <div>
                        <p className="text-slate-500 mb-1 font-medium">
                          Status
                        </p>
                        <p className="text-yellow-600 font-semibold">Pending</p>
                      </div>
                    </div>

                    <Separator className="my-3 bg-blue-200" />

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                      <div>
                        <p className="text-slate-500 mb-1 font-medium">
                          Operating
                        </p>
                        <p className="font-semibold text-slate-900">
                          Economy (Cl-Class)
                        </p>
                      </div>
                      <div>
                        <p className="text-slate-500 mb-1 font-medium">
                          Baggage
                        </p>
                        <p className="text-slate-700">
                          Checkin:{" "}
                          <span className="font-semibold">20 Kg(s)</span>
                        </p>
                        <p className="text-slate-700">
                          Cabin: <span className="font-semibold">7 Kg(s)</span>
                        </p>
                      </div>
                    </div>

                    <Separator className="my-3 bg-blue-200" />

                    <div className="text-xs space-y-1 text-slate-600">
                      <p>
                        <span className="font-medium">Aircraft:</span> Boeing
                        777-300
                      </p>
                      <p>
                        <span className="font-medium">Departure Time:</span>{" "}
                        16:35, Tue 15 Apr 2025
                      </p>
                      <p>
                        <span className="font-medium">Arrival Time:</span>{" "}
                        17:35, Tue 15 Apr 2025
                      </p>
                      <p>
                        <span className="font-medium">Duration:</span> 1 hour 0
                        minute
                      </p>
                    </div>
                  </div>

                  {/* Print Button */}
                  <div className="mt-4 flex justify-end">
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm px-4 py-2 flex items-center gap-2">
                      <Printer size={16} />
                      Print
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
        <div className="flex flex-col justify-end mt-5">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>

              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </div>
  );
}

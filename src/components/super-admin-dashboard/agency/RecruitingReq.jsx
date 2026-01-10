import React from "react";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { agencyReqList } from "@/temp_data/agencyList";
export default function RecruitingReq() {
  return (
    <div className="grid grid-cols-4 gap-4 mb-30">
      {agencyReqList.map((list) => (
        <Card
          key={list.agencyId}
          className="relative bg-white flex flex-col rounded-md overflow-hidden shadow-md h-full"
        >
          {/* Background Circles */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -left-10 -bottom-10 w-24 h-24 rounded-full bg-primary/70"></div>
            <div className="absolute -right-10 -bottom-10 w-24 h-24 rounded-full bg-primary/70"></div>
          </div>

          {/* Content Section */}
          <CardContent className="p-2 flex flex-col items-center gap-5 justify-start flex-grow relative z-10">
            <img
              src={list.image}
              alt=""
              className="size-24 rounded-full object-cover "
            />
            <div className="flex flex-col items-start justify-center text-gray-800 space-y-1 ">
              <h3 className="text-lg font-semibold text-gray-900">
                {list.name}
              </h3>

              <p className="text-sm">
                <span className="font-semibold text-gray-700">Shop Name:</span>{" "}
                <span className="text-gray-600">{list.shopName}</span>
              </p>

              <p className="text-sm">
                <span className="font-semibold text-gray-700">Email:</span>{" "}
                <span className="text-gray-600">{list.email}</span>
              </p>

              <p className="text-sm">
                <span className="font-semibold text-gray-700">Phone:</span>{" "}
                <span className="text-gray-600">{list.phone}</span>
              </p>

              <p className="text-sm">
                <span className="font-semibold text-gray-700">Agency ID:</span>{" "}
                <span className="text-gray-600">{list.agencyId}</span>
              </p>
            </div>
          </CardContent>

          <CardFooter className="flex gap-4 justify-center relative z-10 ">
            <Button className="bg-[#008000] hover:bg-[#008000]/90 px-3 py-1 text-center rounded-sm text-sm font-medium text-white">
              Approve
            </Button>
            <Button className="bg-[#F56810] hover:bg-[#F56810]/90 px-3 py-1 text-center rounded-sm text-sm font-medium text-white">
              Details
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

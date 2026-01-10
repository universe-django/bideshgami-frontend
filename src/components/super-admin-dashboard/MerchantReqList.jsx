import React from "react";
import AgentImage from "../../assets/agent.png";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
export default function MerchantReqList() {
  return (
    <>
      <div className="grid grid-cols-4 gap-4 ">
        <Card className="bg-white flex rounded-md pt-6 py-0 flex-col gap-2">
          <CardContent className="p-4 flex flex-col gap-1 justify-center items-center">
            <img src={AgentImage} alt="" className="size-24" />
            <div className="flex flex-col items-start justify-center text-gray-800 space-y-1">
              <h3 className="text-lg font-semibold text-gray-900">
                Md. Mahamudul Hasan
              </h3>

              <p className="text-sm">
                <span className="font-semibold text-gray-700">Shop Name:</span>{" "}
                <span className="text-gray-600">Bideshgami Agent</span>
              </p>

              <p className="text-sm">
                <span className="font-semibold text-gray-700">Email:</span>{" "}
                <span className="text-gray-600">bideshgamiagent@gmail.com</span>
              </p>

              <p className="text-sm">
                <span className="font-semibold text-gray-700">Phone:</span>{" "}
                <span className="text-gray-600">+8801602589473</span>
              </p>

              <p className="text-sm">
                <span className="font-semibold text-gray-700">Agent ID:</span>{" "}
                <span className="text-gray-600">BG01</span>
              </p>
            </div>
          </CardContent>
          <CardFooter className="flex gap-4 mt-2 justify-center">
            <Button className="bg-[#008000] hover:bg-[#008000]/90 px-2 text-center rounded-sm text-sm font-medium text-white">
              Approve
            </Button>
            <Button className="bg-[#F56810] hover:bg-[#F56810]/90 px-2  text-center rounded-sm text-sm font-medium text-white">
              Details
            </Button>
          </CardFooter>
          <div className="flex justify-end overflow-hidden relative h-10 items-center">
            <div className="w-40 -left-20 absolute h-10 overflow-hidden">
              <div className="w-40 h-40 rounded-full bg-[conic-gradient(#01A0F9_0deg,#01A0F9_90deg,transparent_90deg)]"></div>
            </div>
            <div className=" -right-20 absolute top-0 overflow-hidden">
              <div className="w-40 h-40 rotate-270 overflow-hidden rounded-full bg-[conic-gradient(#01A0F9_0deg,#01A0F9_90deg,transparent_90deg)]"></div>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
}

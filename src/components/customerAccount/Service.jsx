import React from "react";
import { Link } from "react-router";

export default function Service(){
  const serviceList = [
    { id: 1, serviceName: "Work Permit" },
    { id: 2, serviceName: "Air-Ticket" },
    { id: 3, serviceName: "Student" },
    { id: 4, serviceName: "Hajj & Umarah" },
    { id: 5, serviceName: "Visa Processing" },
    { id: 6, serviceName: "Tour Package" },
    { id: 7, serviceName: "Hotel Booking" },
  ];
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-8">
      <h1 className="text-2xl font-bold">
        What kind of services are you interested in from "Bideshgami"?
      </h1>
      <p className="text-sm">You can select multiple option</p>

      <div className="grid grid-cols-3 gap-6">
        {serviceList.map((item) => {
          return (
            <p
              key={item.id}
              className="px-5 py-2 bg-blue-300 rounded-full text-center"
            >
              {item.serviceName}
            </p>
          );
        })}
      </div>
      <Link to={"/user/countries"}>
        <button className="mt-6 px-8 py-2 bg-primary text-white rounded-md hover:bg-blue-700">
          Next
        </button>
      </Link>
    </div>
  );
};


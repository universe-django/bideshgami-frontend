import React from "react";
import VisaCard from "./VisaCard";
import { Link } from "react-router";

export default function VisaList({ dataItems }) {
  const filteredData = (type) => {
    return dataItems.filter((item) => item.typeOfVisa === type);
  };

  return (
    <div className="space-y-12">
      <div className="space-y-4">
        <div className="flex justify-between items-center ">
          <h2 className="text-xl font-bold mb-2">Work Visa</h2>
          <Link className="px-4 py-1 bg-blue-100 border border-blue-600 text-blue-600 font-semibold rounded-sm">
            See All
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
          {filteredData("Work Visa").map((visa) => (
            <VisaCard key={visa.id} data={visa} />
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex justify-between items-center ">
          <h2 className="text-xl font-bold mb-2">Student Visa</h2>
          <Link className="px-4 py-1 bg-blue-100 border border-blue-600 text-blue-600 font-semibold rounded-sm">
            See All
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
          {filteredData("Student Visa").map((visa) => (
            <VisaCard key={visa.id} data={visa} />
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex justify-between items-center ">
          <h2 className="text-xl font-bold mb-2">Hajj and Umrah Visa</h2>
          <Link className="px-4 py-1 bg-blue-100 border border-blue-600 text-blue-600 font-semibold rounded-sm">
            See All
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
          {filteredData("Hajj and umrah Visa").map((visa) => (
            <VisaCard key={visa.id} data={visa} />
          ))}
        </div>
      </div>
    </div>
  );
}

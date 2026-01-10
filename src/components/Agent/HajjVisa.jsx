import React from "react";
import Cards from "./Cards";

const HajjVisa = ({ visaData = [] }) => {
  return (
    <div className="p-4">
      {visaData.length === 0 ? (
        <p className="text-center text-gray-500">No Hajj & Umrah Visa items found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Cards data={visaData} />
        </div>
      )}
    </div>
  );
};

export default HajjVisa;
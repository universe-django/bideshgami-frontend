import React from "react";
import { useParams } from "react-router-dom";
import VisaDetails from "../../components/Agent/AdsVisaDetails";
import { data } from "../../components/home/data";

const AdsVisaDetailsPage = () => {
  const { id } = useParams();
  const visaData = data.find((item) => item.id.toString() === id);

  return (
    <div>
      <VisaDetails visaDetails={visaData} /> {/* pass single visa */}
    </div>
  );
};

export default AdsVisaDetailsPage;

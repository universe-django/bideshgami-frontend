import { data } from "@/components/home/data";
import VisaDetails from "@/components/home/VisaDetails";
import React from "react";

export default function VisaDetailsPage() {
  const visadetails = data;
  window.scrollTo(0, 0);
  return (
    <div>
      <VisaDetails visadetails={visadetails} />
    </div>
  );
}

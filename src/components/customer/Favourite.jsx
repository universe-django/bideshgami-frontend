import React from "react";
import VisaList from "../home/VisaList";
import { data } from "../home/data";

export default function Favourite() {
  const dataItems = data;
  return (
    <>
      <VisaList dataItems={dataItems} />
    </>
  );
}

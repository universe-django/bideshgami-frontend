import React from "react";
import Banner from "../../assets/hero.png";

export default function Herosection() {
  return (
    <div className="w-full">
      <div>
        <img
          src={Banner}
          alt="Banner"
          className=" object-cover aspect-3/1 w-full md:aspect-[calc(4*4/3)]"
        />
      </div>
    </div>
  );
}

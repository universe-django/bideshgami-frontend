import React from "react";
import BannerOne from "../../assets/banner1.png";
export default function Banner() {
  return (
    <div className="max-w-7xl mx-auto mb-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4">
        <img
          src={BannerOne}
          className="rounded-xl shadow w-full object-cover aspect-video"
          alt="Banner 1"
        />
        <img
          src={BannerOne}
          className="rounded-xl shadow w-full  object-cover aspect-video"
          alt="Banner 2"
        />
      </div>
    </div>
  );
}

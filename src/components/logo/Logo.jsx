import React from "react";
import LogoImage from "../../assets/logo.png";
import { Link } from "react-router";
export default function Logo() {
  return (
    <>
      <Link to="/">
        <img
          src={LogoImage}
          alt="Brand Logo"
          className="object-contain w-full"
        />
      </Link>
    </>
  );
}

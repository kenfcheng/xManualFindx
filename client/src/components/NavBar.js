import React from "react";
import logo from "../pictures/MFLogo.png";

export default function NavBar() {
  return (
    <nav className="bg-secondary ">
      <h1 className="d-flex align-items-center justify-content-center mt-16px">
        Manual Find
      </h1>
      <img
        src={logo}
        alt="Logo"
        style={{ width: 250, height: 300 }}
        className="d-flex col-12 col-md
        -push-8 pt-2 mb-12px"
      ></img>
    </nav>
  );
}

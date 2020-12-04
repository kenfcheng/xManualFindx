import React from "react";
import logo from "../pictures/MFLogo.png";
import "../styles/Icon.css";

export default function NavBar() {
  return (
    <nav
      className="nav-bar
     "
    >
      <h1 className="header-position">Manual Find</h1>
      <img src={logo} alt="Logo" className="icon-position"></img>
    </nav>
  );
}

import React from "react";
import logo from "../pictures/MFLogo.png";
import background from "../pictures/manualbackground.jpg";
import "../styles/Icon.css";
import { Parallax, Background } from "react-parallax";

export default function NavBar() {
  return (
    <>
      <nav
        className="nav-bar
     "
      >
        <Parallax>
          <Background>
            <img src={background} alt="background" />
          </Background>
          <h1 className="header-position">Manual Find</h1>
          <img src={logo} alt="Logo" className="icon-position"></img>
        </Parallax>
      </nav>
    </>
  );
}

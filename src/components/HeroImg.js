import React from "react";
import { Link } from "react-router-dom";
import skateClip from "../assets/skateclip.mp4";

const HeroImg = () => {
  return (
    <div className="hero">
      <video autoPlay loop muted id="video">
        <source src={skateClip} type="video/mp4" />
      </video>
      <div className="intro-content">
        {/* <span></span>
          <span></span>
          <span></span>
          <span></span> */}
        <p>I'm a Creative</p>
        <h1>MERN Developer</h1>
        <div className="wrapper">
          <Link to="/project" className="hero-btn">
            Projects
          </Link>
          <Link to="/Contact" className="hero-btn">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;

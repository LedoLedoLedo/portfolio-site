import React from "react";
import { Link } from "react-router-dom";
// import mountain from "../assets/mountainrancho.jpeg";

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        {/* <img className='he' src={mountain} alt="mountainImg"/> */}
        <div className="intro-content">
          <p>Hi! I'm a creative</p>
          <h1>MERN Developer</h1>
          <div className="wrapper">
            <button>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <Link to="/project" className="btn">
                Projects
              </Link>
            </button>
            <button>
              <Link to="/Contact" className="btn-light">
                Contact
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;

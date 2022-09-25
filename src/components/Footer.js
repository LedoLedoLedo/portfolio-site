import React from "react";
import {
  FaGithub,
  FaHome,
  FaInstagram,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <div className="left">
        <div className="location">
          <FaHome size={20} style={{ color: "#cf4520", marginRight: "2rem" }} />
        </div>
        <div>
          <p>Coconut Grove, Miami, FL</p>
          <p> USA </p>
        </div>
      </div>
      <div className="phone">
        <h4>
          {" "}
          <FaPhone
            size={20}
            style={{ color: "#cf4520", marginLeft: "-1rem" }}
          />
          1-786-740-1456
        </h4>
      </div>
      <div className="email">
        <a href="mailto:alfea1983@gmail.com">
          {" "}
          <FaMailBulk
            size={20}
            style={{ color: "#cf4520", marginRight: "2rem" }}
          />
          alfea1983@gmail.com{" "}
        </a>
      </div>

      <div className="social">
        <a href="https://www.linkedin.com/in/alefdez83/">
          <FaLinkedin
            size={30}
            style={{ color: "#cf4520", marginRight: "2rem" }}
          />
        </a>
        <a href="https://www.instagram.com/_alleypop_/">
          <FaInstagram
            size={30}
            style={{ color: "#cf4520", marginRight: "2rem" }}
          />
        </a>
        <a href="https://github.com/LedoLedoLedo">
          <FaGithub
            size={30}
            style={{ color: "#cf4520", marginRight: "2rem" }}
          />
        </a>
      </div>
    </div>
  );
}

export default Footer;

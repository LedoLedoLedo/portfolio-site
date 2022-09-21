import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function NavBar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div className="header">
      <Link to="/">
        <h1>Alejandro Fernandez-Sarasua</h1>
      </Link>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/" onClick={handleClick}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/project" onClick={handleClick}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={handleClick}>
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={handleClick}>
            Contact
          </Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? <FaTimes size={20} /> : <FaBars size={20} />}
      </div>
    </div>
  );
}

export default NavBar;

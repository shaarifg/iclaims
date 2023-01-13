import React from "react";
import { Link } from "react-router-dom";
import HamburgerMenu from "../../pages/home/HamburgerMenu";

// * CSS for HEADER
import "./header.css";

const Header = () => {
  
  return (
    <header id="header">
      <div className="logo">
        <span className="logo_text" >iClaims</span>
      </div>
      <nav>
      <HamburgerMenu/>
        <ul className="nav_links big">
          <li>
            <a href="/" className="link_text" >
              Home
            </a>
          </li>
          <li>
            <Link to="/create-claim" className="link_text">
              Create New Claim
            </Link>
          </li>
          <li>
            <Link to="/all-claims" className="link_text">
              See All Claims
            </Link>
          </li>
          <li>
            <a href="#footer">Contact Developer</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

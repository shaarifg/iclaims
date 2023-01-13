import { useState } from "react";
import { Link } from "react-router-dom";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import "./hamburgers.css";

const btnStyle = {
  color: "red",
  background: "none",
  border: "none",
  zIndex: 100,
  fontSize:'2.5rem',
  backgroundColor:'#001122',
};
const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="menu">
      <button onClick={() => setIsOpen(!isOpen)} className="ham_btn">
        {isOpen ? (
          <CloseIcon sx={btnStyle} />
        ) : (
          <MenuIcon
            sx={btnStyle}
          />
        )}
      </button>
      {isOpen && (
        <ul className="nav_links">
          <li>
            <a href="/" className="link_text">
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
      )}
    </div>
  );
};

export default HamburgerMenu;

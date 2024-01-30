import React from "react";
import "../assets/Css/DropdownMenu.css";
import { Link } from "react-router-dom";

function DropdownMenu() {
  return (
    <>
      <div className="header-dropdown__wrap">
        <Link to="/portraits" className="header-dropdown-items">
          <span className="header-inner-nav__link-text">portraits </span>
        </Link>
        <Link to="/commercial" className="header-dropdown-items">
          <span className="header-inner-nav__link-text">commercial </span>
        </Link>
        <Link to="/wedding" className="header-dropdown-items">
          <span className="header-inner-nav__link-text">wedding </span>
        </Link>
      </div>
    </>
  );
}

export default DropdownMenu;

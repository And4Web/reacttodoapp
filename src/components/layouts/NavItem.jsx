import React from "react";
import { Link } from "react-router-dom";
import "./navItem.css";

function NavItem() {
  return (
    <>
      <div className="ms-3 navItem">
        <Link to="/signin" className="nav-link text-light navLink">
          Sign In{" "}
        </Link>
      </div>
      <div className="navItem">
        <Link to="/signup" className="nav-link text-light navLink">
          Sign Up{" "}
        </Link>
      </div>
      <div className="navItem">
        <Link to="/signin" className="nav-link text-light navLink">
          Sign Out{" "}
        </Link>
      </div>
    </>
  );
}

export default NavItem;

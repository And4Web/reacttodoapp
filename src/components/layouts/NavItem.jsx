import React from "react";
import { Link } from "react-router-dom";

function NavItem() {
  return (
    <>
      <Link to="/signin" className="nav-link">
        Sign In{" "}
      </Link>
      <Link to="/signup" className="nav-link">
        Sign Up{" "}
      </Link>
      <Link to="/signin" className="nav-link">
        Sign Out{" "}
      </Link>
    </>
  );
}

export default NavItem;

import React from "react";
import { Link } from "react-router-dom";
import NavItem from "./NavItem";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-light bg-light d-flex justify-content-center">
        <Link to="/" className="navbar-brand">
          <h3>ToDo App</h3>
        </Link>
        <NavItem />
      </nav>
    </div>
  );
}

export default Navbar;

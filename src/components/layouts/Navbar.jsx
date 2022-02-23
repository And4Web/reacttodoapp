import React from "react";
import { Link } from "react-router-dom";
import NavItem from "./NavItem";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-light bg-secondary d-flex justify-content-center">
        <div
          className="bg-light ps-1 "
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "10px",
          }}
        >
          <Link to="/" className="navbar-brand">
            <h3 className="ps-3">ToDo App</h3>
          </Link>
        </div>
        <NavItem />
      </nav>
    </>
  );
}

export default Navbar;

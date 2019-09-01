import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/js/src/collapse.js";
import links from "../constants/links";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          {Object.entries(links).map(([textVal, path]) => (
            <Link className="nav-item nav-link" to={path}>
              {textVal}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

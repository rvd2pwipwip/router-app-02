import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <div className="NavBar">
        <div className="NavBarGroup">
          <Link to="/">
            <img
              src={require("../images/logo-designcode.svg")}
              width="30"
              alt=""
            />
          </Link>
          <Link to="/courses">Courses</Link>
          <Link to="/downloads">Downloads</Link>
          <Link to="/workshops">Workshops</Link>
          <Link to="/buy">
            <button>Buy</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default NavBar;

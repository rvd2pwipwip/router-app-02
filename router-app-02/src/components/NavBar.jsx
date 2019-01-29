import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

class NavBar extends Component {
  state = { hasScrolled: false };

  handleScroll = () => {
    window.pageYOffset > 50
      ? this.setState({ hasScrolled: true })
      : this.setState({ hasScrolled: false });
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  render() {
    return (
      <div className={this.state.hasScrolled ? "NavBar Scrolled" : "NavBar"}>
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

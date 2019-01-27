import React from "react";
import { Link } from "react-router-dom";
// import "./Home.css";

const Home = () => (
  <div>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>
          Learn to <br />
          design and code React apps
        </h1>
        <p>
          Complete courses about the best tools and design systems. Prototype
          and build apps with React and Swift.
        </p>
        <Link to="/">Watch the video</Link>
      </div>
    </div>
  </div>
);

export default Home;

import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Card from "../components/Card";
import Section from "../components/Section";
import Wave from "../components/Wave";

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
        <div className="Logos">
          <img
            src={require("../images/logo-sketch.png")}
            width="50"
            alt="Sketch"
          />
          <img
            src={require("../images/logo-figma.png")}
            width="50"
            alt="Figma"
          />
          <img
            src={require("../images/logo-studio.png")}
            width="50"
            alt="Studio"
          />
          <img
            src={require("../images/logo-framer.png")}
            width="50"
            alt="Framer"
          />
          <img
            src={require("../images/logo-react.png")}
            width="50"
            alt="React"
          />
          <img
            src={require("../images/logo-swift.png")}
            width="50"
            alt="Swift"
          />
        </div>
        <Wave />
      </div>
    </div>
    <div className="Cards">
      <h2>11 courses, more coming</h2>
      <div className="CardGroup">
        <Card
          title="Design System"
          text="10 sections"
          image={require("../images/wallpaper.jpg")}
        />
        <Card
          title="React for Designers"
          text="12 sections"
          image={require("../images/wallpaper2.jpg")}
        />
        <Card
          title="Sound Design"
          text="5 sections"
          image={require("../images/wallpaper3.jpg")}
        />
        <Card
          title="ARKit 2"
          text="10 sections"
          image={require("../images/wallpaper4.jpg")}
        />
      </div>
    </div>
    <Section
      image={require("../images/wallpaper2.jpg")}
      logo={require("../images/logo-react.png")}
      title="React for Designers"
      text="Learn how to build a modern site using React and the most efficient libraries to get your site/product online. Get familiar with components, CSS grid, animations, interactions, dynamic data with Contentful and deploying your site with Netlify."
    />
  </div>
);

export default Home;

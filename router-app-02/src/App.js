import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import "./App.css";
import NavBar from "./components/NavBar";
import Courses from "./pages/Courses";
import Downloads from "./pages/Downloads";
import Home from "./pages/Home";
import Workshops from "./pages/Workshops";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="content">
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/courses" component={Courses} />
            <Route path="/downloads" component={Downloads} />
            <Route path="/workshops" component={Workshops} />
            <Redirect exact from="/" to="/home" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;

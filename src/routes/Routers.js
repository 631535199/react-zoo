import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./Routers.less";

import Home from "../pages/home";
import About from "../pages/about";

const Routes = () => (
  <Router>
    <div className="app">
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
    </div>
  </Router>
);

export default Routes;

import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./Routers.less";
import { Provider } from 'mobx-react';
import stores from 'stores/index';
import Home from "../pages/home";
import About from "../pages/about";

const Routes = () => (
  <Provider {...stores}>
    <Router>
      <div className="app">
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </div>
    </Router>
  </Provider>
);

export default Routes;

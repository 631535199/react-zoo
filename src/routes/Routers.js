import React from "react";
import {
  Redirect,
  Switch,
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import "./Routers.less";
import { Provider } from "mobx-react";
import stores from "stores/index";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import List from "../pages/List/List";

const Routes = () => (
  <Provider {...stores}>
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/list/:id" component={List} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  </Provider>
);

export default Routes;





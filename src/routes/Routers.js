import React from "react";
import {
  Redirect,
  Switch,
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import List from "../pages/List/List";


const Routes = () => (
  

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/list/:id" component={List} />
        <Redirect to="/" />
      </Switch>

   
);

export default Routes;

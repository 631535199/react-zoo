import React from "react";
import "./index.less";
import {
  Redirect,
  Switch,
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import stores from "stores/index";
import { Provider } from "mobx-react";
import Layouts from "../components/layout";


const Contents = () => (
  <div className="app">
    <Provider {...stores}>
      <Router>
        <Layouts />
      </Router>
    </Provider>
  </div>
);

export default Contents;

import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import "../style/layout.scss";
import Footer from "./Footer.js";
import MenuHeader from "./MenuHeader.js";
import HomePage from "../pages/HomePage.js";
import TangoA from "../pages/TangoA.js";
import Apparatus from "../pages/Apparatus.js";
import DataBase from "../pages/DataBase.js";
import Contact from "../pages/Contact.js";
import ErrorPage from "../pages/ErrorPage.js";
import LogOn from "../pages/LogOn.js";

// import { render } from "react-dom";

function Layout() {
  return (
    <div className="layout">
      <Router>
        <MenuHeader />
        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route path="/home" component={HomePage}></Route>
          <Route path="/tangoa" component={TangoA}></Route>
          <Route path="/apparatus" component={Apparatus}></Route>
          <Route path="/database" component={DataBase}></Route>
          <Route path="/contact" component={Contact}></Route>
          <Route path="/logon" component={LogOn}></Route>
          <Route component={ErrorPage} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default Layout;

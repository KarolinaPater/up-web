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
import Team from "../pages/Team.js";
import MaterialBase from "../pages/MaterialBase.js";
import Contact from "../pages/Contact.js";
import ErrorPage from "../pages/ErrorPage.js";

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
          <Route path="/team" component={Team}></Route>
          <Route path="/base" component={MaterialBase}></Route>
          <Route path="/contact" component={Contact}></Route>
          <Route component={ErrorPage} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default Layout;

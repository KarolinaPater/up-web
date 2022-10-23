import "../style/layout.scss";
import axios from "axios";
import React, { useEffect, useContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  useHistory,
} from "react-router-dom";
import { AppContext } from "../AppContext";
import Footer from "./Footer.js";
import MenuHeader from "./MenuHeader.js";
import HomePage from "../pages/HomePage.js";
import TangoA from "../pages/TangoA.js";
import Apparatus from "../pages/Apparatus.js";
import DataBase from "../pages/DataBase.js";
import Contact from "../pages/Contact.js";
import ErrorPage from "../pages/ErrorPage.js";
import LogOn from "../pages/LogOn.js";
import Account from "../pages/Account.js";
import MyArticle from "../pages/MyArticle.js";

function Layout() {
  const { setIsUserLogged, setUserInfo } = useContext(AppContext);

  const checkSession = () => {
    const config = {
      headers: {
        "x-access-token": window.localStorage.getItem("token") || undefined,
      },
    };
    axios
      .post(`${process.env.REACT_APP_API_URL}/session`, {}, config)
      .then((response) => {
        setUserInfo(response.data.user);
        setIsUserLogged(true);
        window.localStorage.setItem("token", response.data.accessToken);
      })
      .catch((error) => {
        setUserInfo({
          name: "",
          last_name: "",
          email: "",
        });
        setIsUserLogged(false);
        window.localStorage.removeItem("token");
      });
  };
  useEffect(() => {
    console.log("sprawdzanie sesja");
    checkSession();
  }, []);

  return (
    <div className="layout">
      <Router basename={process.env.PUBLIC_URL}>
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
          <Route path="/account" component={Account}></Route>
          <Route component={MyArticle}></Route>
          <Route component={ErrorPage} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default Layout;

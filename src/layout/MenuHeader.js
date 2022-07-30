import "../style/menu-header.scss";
//import MenuButton from "../components/menu/MenuButton.js";
import React from "react";
import { NavLink } from "react-router-dom";

function MenuHeader() {
  return (
    <div className="menu-wrapper">
      <div className="menu-header">
        <NavLink className="menu-button" to={"/home"}>
          <p>O nas</p>
        </NavLink>
        <NavLink className="menu-button" to={"/tangoa"}>
          <p>Tango A</p>
        </NavLink>
        <NavLink className="menu-button" to={"/apparatus"}>
          <p>Aparatura</p>
        </NavLink>
        <NavLink className="menu-button" to={"/database"}>
          <p>Baza danych</p>
        </NavLink>

        <NavLink className="menu-button" to={"/contact"}>
          <p>Kontakt</p>
        </NavLink>
        <NavLink className="menu-button" to={"/logon"}>
          <p>Zaloguj się</p>
        </NavLink>
      </div>
    </div>
  );
}

export default MenuHeader;

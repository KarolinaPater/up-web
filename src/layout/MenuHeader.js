import "../style/menu-header.scss";
import MenuButton from "../components/menu/MenuButton.js";
import React from "react";
import { NavLink } from "react-router-dom";

function MenuHeader() {
  return (
    <div className="menu-wrapper">
      <div className="menu-header">
        {/* <MenuButton text={"home page"} link={"/home"} />
        <MenuButton text={"zespół"} link={"/team"} />
        <MenuButton text={"baza materiałów"} link={"/base"} />
        <MenuButton text={"kontakt"} link={"/contact"} /> */}
        <NavLink className="menu-button" to={"/home"}>
          <p>home page</p>
        </NavLink>
        <NavLink className="menu-button" to={"/team"}>
          <p>zespół</p>
        </NavLink>
        <NavLink className="menu-button" to={"/base"}>
          <p>baza materiałów</p>
        </NavLink>
        <NavLink className="menu-button" to={"/contact"}>
          <p>Kontakt</p>
        </NavLink>
      </div>
    </div>
  );
}

export default MenuHeader;

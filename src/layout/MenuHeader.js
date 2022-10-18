import "../style/menu-header.scss";
//import MenuButton from "../components/menu/MenuButton.js";
import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AppContext } from "../AppContext";
import iconuser from "../images/icon-user.png";

function MenuHeader() {
  const { userInfo, isUserLogged } = useContext(AppContext);

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

        {isUserLogged ? (
          <NavLink className="menu-button" to={"/account"}>
            <img alt="icon-user" className="icon-user" src={iconuser}></img>
            {userInfo.name ? userInfo.name : null}
          </NavLink>
        ) : (
          <NavLink className="menu-button" to={"/logon"}>
            <p>Zaloguj się</p>
          </NavLink>
        )}
      </div>
    </div>
  );
}

export default MenuHeader;

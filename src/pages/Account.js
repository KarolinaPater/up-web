import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AppContext } from "../AppContext";

function Account() {
  const { userInfo } = useContext(AppContext);

  return (
    <div className="page">
      <h1>Konto użytkownika</h1>
      <div className="user-info">
        <div className="user-info-label">
          Imie: <strong>{userInfo.name}</strong>
        </div>
        <div className="user-info-label">
          Nazwisko: <strong>{userInfo.last_name}</strong>
        </div>
      </div>
      <NavLink className="navlink" to={"/my-article"}>
        <p>Moje artykuły</p>
      </NavLink>
    </div>
  );
}

export default Account;

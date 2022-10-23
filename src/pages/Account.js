import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AppContext } from "../AppContext";
import "../style/account.scss";
import "../style/home-page/page.scss";
import axios from "axios";
import { useHistory } from "react-router-dom";

function Account() {
  let history = useHistory();
  const { userInfo, setUserInfo, setIsUserLogged } = useContext(AppContext);

  const handleLogOut = () => {
    const config = {
      headers: {
        "x-access-token": window.localStorage.getItem("token") || undefined,
      },
    };
    console.log(`${process.env.REACT_APP_API_URL}/logout`);
    axios
      .post(`${process.env.REACT_APP_API_URL}/logout`, {}, config)
      .then((response) => {
        console.log("udało sie", response.data);
        setUserInfo({
          name: "",
          last_name: "",
          email: "",
        });
        setIsUserLogged(false);
        window.localStorage.removeItem("token");
        history.push("/home");
        alert(response.data.message);
      })
      .catch((error) => {
        alert(error.response.data.message || "Błąd serwera");
        console.log("nie udalo sie", error.response.data);
      });
  };

  return (
    <div className="page">
      <div className="home-page-theme">
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
        <button className="form-button2" onClick={handleLogOut}>
          Wyloguj
        </button>
      </div>
    </div>
  );
}

export default Account;

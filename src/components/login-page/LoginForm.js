import "../../style/login-page/login-page.scss";
import { useState, useContext } from "react";
import { validEmail, validPassword } from "../../validator/validator.js";
import axios from "axios";
import { AppContext } from "../../AppContext";

function LoginForm() {
  const { setUserInfo, setUserRole, setUserId, setIsUserLogged } =
    useContext(AppContext);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState({
    email: null,
    password: null,
  });

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const handleForm = () => {
    setError({ email: null, password: null });
    const email_error = validEmail(user.email);
    const password_error = validPassword(user.password);
    setError({ email: email_error, password: password_error });
    if (email_error || password_error) {
      console.log("błąd emaila", email_error);
      console.log("bład hasła", password_error);
      return;
    }

    axios
      .post(`${process.env.REACT_APP_API_URL}/login`, user)
      .then((response) => {
        console.log("udało sie", response.data);
        setUserInfo(response.data.user);
        setIsUserLogged(true);
        alert(response.data.message);
      })
      .catch((error) => {
        alert(error.response.data.message || "Błąd serwera");
        console.log("nie udalo sie", error.response.data);
      });
  };

  return (
    <div className="form">
      <div className="form-title">
        <h1>Formularz logowania</h1>
      </div>
      <div className="text-input-wrapper">
        <label className="text-input-label"> Nazwa użytkownika </label>
        <input
          className="text-input-input"
          type="email"
          name="email"
          placeholder="nazwa@edu.pl"
          value={user.email}
          onChange={handleInput}
        ></input>
        <div className="text-input-error">
          {error.email ? error.email : null}
        </div>
      </div>

      <div className="text-input-wrapper">
        <label className="text-input-label"> Hasło </label>
        <input
          className="text-input-input"
          type="password"
          name="password"
          placeholder="*******"
          value={user.password}
          onChange={handleInput}
        ></input>
        <div className="text-input-error">
          {error.password ? error.password : null}
        </div>
      </div>
      <button onClick={handleForm} className="form-button">
        Zaloguj się
      </button>
    </div>
  );
}

export default LoginForm;

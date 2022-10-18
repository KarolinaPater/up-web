import "../../style/login-page/login-page.scss";
import { useState } from "react";
import {
  validName,
  validEmail,
  validRegisterPassword,
  validConfirmPassword,
} from "../../validator/validator";
import axios from "axios";

function RegisterForm() {
  const [user, setUser] = useState({
    name: "",
    last_name: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const [error, setError] = useState({
    name: "",
    last_name: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const handleForm = () => {
    
    setError({
      name: null,
      last_name: null,
      email: null,
      password: null,
      confirm_password: null,
    });
    const name_error = validName(user.name);
    const last_name_error = validName(user.last_name);
    const email_error = validEmail(user.email);
    const password_error = validRegisterPassword(user.password);
    const confirm_password_error = validConfirmPassword(
      user.password,
      user.confirm_password
    );
    setError({
      name: name_error,
      last_name: last_name_error,
      email: email_error,
      password: password_error,
      confirm_password: confirm_password_error,
    });
    if (
      name_error ||
      last_name_error ||
      email_error ||
      password_error ||
      confirm_password_error
    ) {
      console.log("błąd name", name_error);
      console.log("bład lastname", last_name_error);
      console.log("błąd emaila", email_error);
      console.log("bład haselo", password_error);
      console.log("blad konf pasword", confirm_password_error);
      return;
    }
    axios
      .post(`${process.env.REACT_APP_API_URL}/register`, user)
      .then((response) => {
        // setPost(response.data);
        console.log("udalo sie?", response.data);
        alert(response.data.message);
      })
      .catch((error) => {
        alert(error.response.data.message || "Błąd serwera");
        console.log("nieudalo sie", error.response.data);
        // setError(error);
      });
  };

  return (
    <div className="form">
      <div className="form-title">
        <h1>Formularz rejestracji</h1>
      </div>
      <div className="text-input-wrapper">
        <label className="text-input-label"> Imię</label>
        <input
          className="text-input-input"
          type="text"
          name="name"
          placeholder="Jan"
          onChange={handleInput}
        ></input>
        <div className="text-input-error">{error.name ? error.name : null}</div>
      </div>

      <div className="text-input-wrapper">
        <label className="text-input-label"> Nazwisko </label>
        <input
          className="text-input-input"
          type="text"
          name="last_name"
          placeholder="Kowalski"
          onChange={handleInput}
        ></input>
        <div className="text-input-error">
          {error.last_name ? error.last_name : null}
        </div>
      </div>

      <div className="text-input-wrapper">
        <label className="text-input-label"> Adres email </label>
        <input
          className="text-input-input"
          type="email"
          name="email"
          placeholder="jankowalski@edu.pl"
          onChange={handleInput}
        ></input>
        <div className="text-input-error">
          {error.email ? error.email : null}
        </div>
      </div>

      <div className="text-input-wrapper">
        <label className="text-input-label"> Podaj hasło </label>
        <input
          className="text-input-input"
          type="password"
          name="password"
          placeholder="*******"
          onChange={handleInput}
        ></input>
        <div className="text-input-error">
          {error.password ? error.password : null}
        </div>
      </div>

      <div className="text-input-wrapper">
        <label className="text-input-label"> Powtórz hasło </label>
        <input
          className="text-input-input"
          type="password"
          name="confirm_password"
          placeholder="*******"
          onChange={handleInput}
        ></input>
        <div className="text-input-error">
          {error.confirm_password ? error.confirm_password : null}
        </div>
      </div>
      <button onClick={handleForm} className="form-button">
        Zarestruj się
      </button>
    </div>
  );
}

export default RegisterForm;

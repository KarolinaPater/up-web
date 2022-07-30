import { useState } from "react";
import "../style/login-page/login-page.scss";

function LogOn() {
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  //errorMessages : Przechowuj obiekt z komunikatem o błędzie i nazwą pola.
  //isSubmitted : wartość logiczna wskazująca, czy formularz został pomyślnie przesłany, czy nie.
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );
  //Funkcja renderErrorMessage zwraca kod JSX do wyświetlania komunikatu o błędzie związanego z nazwą pola.

  return (
    <div className="page">
      <div className="form-wrapper">
        <div className="form">
          <div className="form-title">
            <h1>Formularz logowania</h1>
          </div>
          <div className="text-input-wrapper">
            <label className="text-input-label"> Nazwa użytkownika </label>
            <input
              className="text-input-input"
              type="email"
              name="adres"
              placeholder="nazwa@edu.pl"
            ></input>
          </div>

          <div className="text-input-wrapper">
            <label className="text-input-label"> Hasło </label>
            <input
              className="text-input-input"
              type="password"
              name="pass"
              placeholder="*******"
            ></input>
          </div>
          <button className="form-button"> Zaloguj się </button>
        </div>

        <button className="change-form-button"> Utwórz konto </button>
      </div>
    </div>
  );
}
export default LogOn;

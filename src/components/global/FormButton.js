import { isDisabled } from "@testing-library/user-event/dist/utils";
import "../../style/global/form-button.scss";

function FormButton(props) {
  return (
    <button
      onClick={props.handleForm}
      className="form-button"
      disabled={props.disabled}
    >
      {props.title}
    </button>
  );
}

export default FormButton;
//  <button
//    onClick={handleForm}
//    className="form-button"
//    disabled={isDisabledButton}
//  >
//    Zaloguj się
//  </button>;

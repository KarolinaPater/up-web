import "../../style/global/action-button.scss";
import icondelete from "../../images/icon-trash.svg";

function DeleteButton(props) {
  return (
    <button
      onClick={props.handleClick}
      className="action-button"
      disabled={props.disabled}
    >
      {props.title}
      <img alt="icon-trash" className="delete-icon" src={icondelete}></img>
    </button>
  );
}
export default DeleteButton;

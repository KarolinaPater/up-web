import "../../style/global/action-button.scss";
import iconedit from "../../images/icon-edit.svg";

function EditButton(props) {
  return (
    <button
      onClick={props.handleClick}
      className="action-button"
      disabled={props.disabled}
    >
      <img alt="icon-edit" className="edit-icon" src={iconedit}></img>
    </button>
  );
}
export default EditButton;

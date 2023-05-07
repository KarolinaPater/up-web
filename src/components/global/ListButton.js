import "../../style/global/action-button.scss";
import iconarticle from "../../images/icon-article.svg";

function ListButton(props) {
  return (
    <button
      onClick={props.handleClick}
      className="action-button"
      disabled={props.disabled}
    >
      {props.title}
      <img alt="icon-edit" className="list-icon" src={iconarticle}></img>
    </button>
  );
}
export default ListButton;

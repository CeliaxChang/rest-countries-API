import classes from "./Card.module.css";

const Card = (props) => {
  return (
    <div
      className={`${classes.container} ${props.className}`}
      onClick={props.onClick}
    >
      {props.children}
    </div>
  );
};

export default Card;

import classes from "./Icon.module.css";

const Icon = ({ type, changeColor = false }) => {
  const search = changeColor ? classes.search : "";

  return (
    <div className={`${classes.icon} ${search}`}>
      <ion-icon name={type}></ion-icon>
    </div>
  );
};

export default Icon;

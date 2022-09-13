import classes from "./Icon.module.css";

const Icon = ({ type, custom = null }) => {
  const customStyle = custom ? classes[custom] : "";

  return (
    <div className={`${classes.container} ${customStyle}`}>
      <ion-icon name={type}></ion-icon>
    </div>
  );
};

export default Icon;

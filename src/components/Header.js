import classes from "./Header.module.css";
import Icon from "./Icon";

const Header = () => {
  return (
    <header className={classes.header}>
      <h2>Where in the world?</h2>
      <div className={classes.theme}>
        <Icon type="moon-outline" />
        <p>Dark Mode</p>
      </div>
    </header>
  );
};

export default Header;

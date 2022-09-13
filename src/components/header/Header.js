import classes from "./Header.module.css";

import ThemeSwitch from "./ThemeSwitch";

const Header = () => {
  return (
    <header className={classes.container}>
      <h2>Where in the world?</h2>
      <ThemeSwitch />
    </header>
  );
};

export default Header;

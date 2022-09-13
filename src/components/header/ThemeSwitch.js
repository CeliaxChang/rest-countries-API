import classes from "./ThemeSwitch.module.css";
import { useState } from "react";

import Icon from "../UI/Icon";

const ThemeSwitch = () => {
  const [isLightMode, setIsLightMode] = useState(true);
  const switchThemeHandler = () => {
    setIsLightMode((prev) => !prev);

    const element = document.documentElement;
    element.classList.toggle("dark");
  };

  const theme = isLightMode ? "Dark" : "Light";
  const icon = isLightMode ? "moon-outline" : "sunny-outline";

  return (
    <button className={classes.container} onClick={switchThemeHandler}>
      <Icon type={icon} />
      <p>{theme} Mode</p>
    </button>
  );
};

export default ThemeSwitch;

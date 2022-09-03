import classes from "./SearchInput.module.css";
import Icon from "./Icon";

const SearchInput = () => {
  return (
    <div className={classes.container}>
      <input type="text" placeholder="Search for a country..." className={classes.input}/>
      <Icon type="search-outline" changeColor={true} className={classes.icon}/>
    </div>
  );
};

export default SearchInput;

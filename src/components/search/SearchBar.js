import classes from "./SearchBar.module.css"

import SearchInput from "./SearchInput";
import Filter from "./Filter";

const SearchBar = () => {
  return (
    <div className={classes.container}>
      <SearchInput />
      <Filter />
    </div>
  );
};

export default SearchBar;

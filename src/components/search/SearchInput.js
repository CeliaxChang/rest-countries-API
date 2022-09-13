import classes from "./SearchInput.module.css";
import { useDispatch } from "react-redux";
import { getSearchData } from "../../features/countrySlice";

import Card from "../UI/Card";
import Icon from "../UI/Icon";

const SearchInput = () => {
  const dispatch = useDispatch();
  const searchHandler = (e) => {
    dispatch(getSearchData(e.target.value))
  };

  return (
    <Card className={classes.container}>
      <label htmlFor="search" className={classes.icon}>
        <Icon type="search-outline" custom="search" />
      </label>
      <input
        id="search"
        type="search"
        placeholder="Search for a country..."
        className={classes.input}
        onChange={searchHandler}
      />
    </Card>
  );
};

export default SearchInput;

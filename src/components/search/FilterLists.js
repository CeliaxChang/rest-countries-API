import classes from "./FilterLists.module.css";
import { useDispatch } from "react-redux";
import { getRegion } from "../../features/countrySlice";

import Card from "../UI/Card";

const options = ["All", "Africa", "Americas", "Asia", "Europe", "Oceania"];

const FilterLists = ({ showOption }) => {
  const dispatch = useDispatch();
  const filterHandler = (data) => {
    dispatch(getRegion(data));
    showOption(false);
  };

  const lists = options.map((region) => (
    <li
      key={region}
      className={classes.item}
      onClick={filterHandler.bind(null, region)}
    >
      {region}
    </li>
  ));

  return (
    <Card className={classes.container}>
      <ul className={classes.list}>{lists}</ul>
    </Card>
  );
};

export default FilterLists;

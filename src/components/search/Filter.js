import classes from "./Filter.module.css";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectRegion } from "../../features/countrySlice";

import Icon from "../UI/Icon";
import FilterLists from "./FilterLists";
import Button from "../UI/Button";

const Filter = () => {
  const [showOption, setShowOption] = useState(false);
  const showOptionHandler = () => setShowOption((prev) => !prev);
  const region = useSelector(selectRegion);
  const filterName = region ? region : "Filter by Region";

  return (
    <div className={classes.container}>
      <Button className={classes.button} onClick={showOptionHandler}>
        {filterName}
        <span>
          <Icon type="chevron-down-outline" />
        </span>
      </Button>

      {showOption && <FilterLists showOption={setShowOption} />}
    </div>
  );
};

export default Filter;

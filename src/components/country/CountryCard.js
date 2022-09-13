import classes from "./CountryCard.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getSearchData, getRegion } from "../../features/countrySlice";

import Card from "../UI/Card";
import List from "../UI/List";

const CountryCard = ({ data }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { flags, capital, population, name, region } = data;

  const toDetailHandler = () => {
    navigate(`/countries/${name}`);
    dispatch(getSearchData(""));
    dispatch(getRegion("All"));
  };

  return (
    <Card className={classes.container} onClick={toDetailHandler}>
      <div className={classes["img-box"]}>
        <img className={classes.img} src={flags} alt="flag" />
      </div>

      <div className={classes.text}>
        <h5 className={classes.title}>{name}</h5>
        <ul className={classes.description}>
          <List
            item={{
              Population: population,
              Region: region,
              Capital: capital,
            }}
          />
        </ul>
      </div>
    </Card>
  );
};

export default CountryCard;

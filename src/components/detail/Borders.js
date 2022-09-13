import classes from "./Borders.module.css";
import { selectCountries } from "../../features/countrySlice";
import { useSelector } from "react-redux";

import BorderItem from "./BorderItem";

const Borders = ({ data }) => {
  const countries = useSelector(selectCountries);

  const borderCountries = data?.map((name) => {
    const border = countries.find((country) => country.id === name);

    return <BorderItem key={name} name={border?.name} />;
  });

  return (
    <div className={classes.container}>
      <h5 className={classes.title}>Border Countries:</h5>
      {!data && <p>None</p>}
      <div className={classes.content}>{borderCountries}</div>
    </div>
  );
};

export default Borders;

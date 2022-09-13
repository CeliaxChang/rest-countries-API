import classes from "./Countries.module.css";
import { useSelector } from "react-redux";
import {
  selectCountries,
  selectSearch,
  selectRegion,
} from "../../features/countrySlice";
import { gotData } from "../../utils";

import CountryCard from "./CountryCard";

const Countries = ({ isLoading }) => {
  const allCountries = useSelector(selectCountries);
  const regionFilter = useSelector(selectRegion);
  const searchInput = useSelector(selectSearch).toLowerCase().trim();

  const countryList = allCountries
    ?.filter((country) => country.name.toLowerCase().startsWith(searchInput))
    .filter((country) => {
      if (regionFilter === "All") return country;
      return country.region === regionFilter;
    })
    .map((country) => {
      return <CountryCard key={country.id} data={country} />;
    });


  return (
    <section className={classes.container}>
      {countryList}
      {!gotData(countryList) && !isLoading && (
        <p className={classes.alert}>No resault with " {searchInput} "</p>
      )}
    </section>
  );
};

export default Countries;

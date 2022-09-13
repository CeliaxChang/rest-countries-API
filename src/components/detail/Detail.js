import classes from "./Detail.module.css";
import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { selectCountries } from "../../features/countrySlice";

import List from "../UI/List";
import Borders from "./Borders";

const Detail = () => {
  const { countryId } = useParams();
  const countriesData = useSelector(selectCountries);
  
  const country = countriesData.find((country) => country.name === countryId);
  const nativeName = country && Object.values(country.nativeName)[0].official;
  const currencies = country && Object.values(country.currencies)[0].name;
  const languages = country && Object.values(country.languages).join(", ");

  return (
    <Fragment>
      <section className={classes.container}>
        <div className={classes["img-box"]}>
          <img className={classes.img} src={country?.flags} alt="flag" />
        </div>
        <div className={classes.text}>
          <h4 className={classes.title}>{country?.name}</h4>
          <div className={classes.detail}>
            <List
              item={{
                "Native Name": nativeName,
                Population: country?.population,
                Region: country?.region,
                Subregion: country?.subregion,
                Capital: country?.capital,
              }}
            />
            <List
              item={{
                "Top Level Domain": country?.tld,
                Currencies: currencies,
                Languages: languages,
              }}
            />
          </div>
          <Borders data={country?.borders} />
        </div>
      </section>
    </Fragment>
  );
};

export default Detail;

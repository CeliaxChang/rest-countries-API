import classes from "./App.module.css";
import { useEffect, useCallback } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectCountries } from "./features/countrySlice";
import { gotData } from "./utils";
import { getAll } from "./features/countrySlice";
import useHttp from "./hooks/useHttp";
import { getData } from "./lib/api";

import Header from "./components/header/Header";
import CountryDetail from "./pages/CountryDetail";
import Home from "./pages/Home";

function App() {
  const countries = useSelector(selectCountries);
  const { isLoading, sendRequest } = useHttp(getData);
  const dispatch = useDispatch();
  const getAllCountries = useCallback(
    (data) => dispatch(getAll(data)),
    [dispatch]
  );

  useEffect(() => {
    if (gotData(countries)) return;

    sendRequest("/all", getAllCountries);
  }, [countries, sendRequest, getAllCountries]);

  return (
    <div className={classes.background}>
      <Header />
      <main>
        <Routes>
          <Route path="*" element={<Navigate to="countries" />} />
          <Route path="/countries" element={<Home isLoading={isLoading}/>} />
          <Route path="/countries/:countryId" element={<CountryDetail isLoading={isLoading}/>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

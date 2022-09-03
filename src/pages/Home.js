import React from "react";
import classes from "./Home.module.css";
import SearchInput from "../components/SearchInput";

const Home = () => {
  return (
    <main className={classes.background}>
      <SearchInput />
    </main>
  );
};

export default Home;

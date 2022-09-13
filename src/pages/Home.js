import classes from "./Home.module.css";

import SearchBar from "../components/search/SearchBar";
import Countries from "../components/country/Countries";
import Loading from "../components/UI/Loading";

const Home = ({isLoading}) => {
  return (
    <section className={classes.container}>
      {isLoading && <Loading />}
      <SearchBar />
      <Countries isLoading={isLoading}/>
    </section>
  );
};

export default Home;

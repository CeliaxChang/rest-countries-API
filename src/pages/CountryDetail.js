import classes from "./CountryDetail.module.css";
import { useNavigate } from "react-router-dom";

import Loading from "../components/UI/Loading";
import Button from "../components/UI/Button";
import Icon from "../components/UI/Icon";
import Detail from "../components/detail/Detail";

const CountryDetail = ({ isLoading }) => {
  const navigate = useNavigate();
  const backToHomeHandler = () => {
    navigate("/", { replace: true });
  };
  return (
    <section className={classes.container}>
      <Button className={classes.button} onClick={backToHomeHandler}>
        <Icon type="arrow-back-outline" custom="back" />
        Back
      </Button>
      {isLoading && <Loading />}
      {!isLoading && <Detail />}
    </section>
  );
};

export default CountryDetail;

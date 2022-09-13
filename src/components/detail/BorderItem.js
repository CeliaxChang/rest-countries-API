import classes from "./BorderItem.module.css";
import { Link } from "react-router-dom";

import Card from "../UI/Card";

const BorderItem = ({ name}) => {
  return (
    <Link to={`/countries/${name}`}>
      <Card className={classes.content}>{name}</Card>
    </Link>
  );
};

export default BorderItem;

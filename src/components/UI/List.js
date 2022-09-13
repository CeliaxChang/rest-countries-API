import classes from "./List.module.css";

const List = ({ item }) => {
  const lists = Object.entries(item).map(([key, value]) => {
   
    return (
      <li key={key}>
        <span className={classes.title}>{key}:</span> {value}
      </li>
    );
  });

  return <ul className={classes.lists}>{lists}</ul>;
};

export default List;

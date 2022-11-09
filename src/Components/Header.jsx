//import Header from "./Header";
//library
import styles from "styled-components";

const Header = (props) => {
  const { title } = props;

  return (
    <h1 styles={{ color: " aqua", border: "2px, solid black" }}> {title} </h1>
  );
};

export default Header;

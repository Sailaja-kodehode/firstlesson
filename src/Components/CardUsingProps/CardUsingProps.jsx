//css
import styles from "CardUsingProps.module.css";

//library
import styled from "Styled-component";

const CardUsingProps = (props) => {
  const { title, paragraph } = props;
  return (
    <article
      id="MyFirstCard"
      Style={{ color: " aqua", border: "2px, solid black" }}
      className={styles.Wrapper}
    >
      <a href=""></a>
      <h3> {title} </h3>
      <p> {paragraph} </p>
    </article>
  );
};
export default CardUsingProps;

//css
import styles from "./CardUsingProps.module.css";

const CardUsingProps = (props) => {
  const { title, paragraph } = props;
  return (
    <article id="MyFirstCard" className={styles.Wrapper}>
      <a href=""></a>
      <h3 style={{ backgroundColor: "aqua" }}> {title} </h3>
      <p className={styles.wrapper}> {paragraph} </p>
    </article>
  );
};
export default CardUsingProps;

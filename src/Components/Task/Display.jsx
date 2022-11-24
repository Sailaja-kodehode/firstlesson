// Libraries
import { useContext } from "react";

// Context
import Context from "../../Context/Pokom";

const Display = () => {
  const stateObject = useContext(Context);

  return (
    <div>
      <h1>Display</h1>
      <p style={{ backgroundColor: "lightblue" }}>{stateObject.state}</p>
    </div>
  );
};

export default Display;

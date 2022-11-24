// Libraries
import { useContext } from "react";

// Context
import DataContext from "../../Context/Pokom";

const Selector = () => {
  const context = useContext(DataContext);

  function handleChange(event) {
    context.setState(() => {
      return event.target.value;
    });
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Type input here"
        value={context.state}
        onChange={handleChange}
      />
    </div>
  );
};

export default Selector;

import { useState } from "react";

/**
 * A component that register changes and updates a display field
 */
const TextInput = () => {
  const [textInput, setTextInput] = useState("Type input above");
  const handleChange = (event) => {
    const newString = event.target.value;
    setTextInput(() => {
      return newString;
    });
  };
  return (
    <div>
      <input type="text" onChange={(event) => handleChange(event)} />
      <h2>{textInput}</h2>
    </div>
  );
};
export default TextInput;

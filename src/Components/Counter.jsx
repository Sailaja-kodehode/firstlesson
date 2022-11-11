import React, { useState } from "react";
import TextInput from "./TextInput";
const Counter = () => {
  const [count, setState] = useState(0);

  const handleClick = () => {
    setState(count + 1);
  };
  return (
    <React.Fragment>
      <h1> {count} </h1>

      <button
        onClick={() => {
          setState(count + 1);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          setState(count - 1);
        }}
      >
        Decrement
      </button>
      <TextInput />
    </React.Fragment>
  );
};
export default Counter;

import { useState, useEffect } from "react";
import Child from "./Child";
import "App.js";

async function fetchData(callback) {
  const response = await fetch("https://catfact.ninja/facts");
  const data = await response.json();

  callback(data.data);
}

//A component that register changes and updates a display field

const TextInput = (props) => {
  const { data } = props;

  const [textInput, setTextInput] = useState("");
  const [fetchedData, setFetchedData] = useState();

  const handleChange = (event) => {
    const newString = event.target.value;

    setTextInput(() => {
      return newString;
    });
  };

  const myArray = ["some string", "another string"];

  useEffect(() => {
    console.log("This effect was run");

    fetchData(setFetchedData);

    //Dependency
  }, []);

  return (
    <div className="info">
      <input
        type="text"
        onChange={(event) => handleChange(event)}
        value={textInput}
      />

      <h2>{textInput}</h2>

      <ul>
        <li>{fetchedData && fetchedData[1].fact}</li>
      </ul>

      <Child data={data} />
    </div>
  );
};

export default TextInput;

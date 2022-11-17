import { useState, useEffect } from "react";

//css
//import styles from "./GetInput.module.css";

async function fetchData(callback) {
  const response = await fetch("https://catfact.ninja/facts");
  const data = await response.json();

  callback(data);
}
/*
 * A component that register changes and updates a display field
 */

const GetInput = () => {
  const [fetchedData, setFetchedData] = useState(null);
  // console.log(fetchedData);
  useEffect(() => {
    // Using useEffect to minimize the re-rendering of useState.
    // Calling the function from above, will only run when the content of the array its outside
    fetchData(setFetchedData);
  }, []);
  return (
    <div>
      <ul>
        <li>{fetchedData && fetchedData[1].fact}</li>
      </ul>
    </div>
  );
};

export default GetInput;

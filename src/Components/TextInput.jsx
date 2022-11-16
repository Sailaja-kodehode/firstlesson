import { useState, useEffect } from "react";
//import Child from "./Child";
//css
//import styles from "./textInput.module.css";

async function fetchData(callback) {
  const response = await fetch("https://catfact.ninja/facts");
  const data = await response.json();
  //console.log(data);
  callback(data);
}
/**
 * A component that register changes and updates a display field
 */
const TextInput = (props) => {
  //const { data } = props;
  //const [TextInput, setTextInput] = useState("");
  const [fetchedData, setFetchedData] = useState(null);
  //const handleChange = (event) => {
  //const newString = event.target.value;
  //setTextInput(() => {
  //return newString;
  //});
  //};
  //};

  //Use FetchAPI and useEffect to fetch data from an API
  //const [fetchedData, setFetchedData] = useState(null);
  useEffect(() => {
    fetchedData(setFetchedData);
    return (
      <div>
        <ul>
          <li>{fetchedData && fetchedData[1].fact} </li>
        </ul>
      </div>
    );
  });
};
//useEffect(() => {
//fetch().then((res) => res.json("https://catfact.ninja/facts"));
//console.log(res);
//TextInput(res.data);
//return (
//<div>
//<ul>
//{TextInput.map((textInput) => (
//<li key={textInput.id}>{textInput.title}</li>
//))}
//</ul>
//</div>
//);
//});
//};
export default TextInput;

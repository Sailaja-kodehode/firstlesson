//import logo from "./logo.svg";
// import "./App.css";
import "./Components/Header";
import "./Components/Counter";
import "./App.css";
import { useState } from "react";
import Counter from "./Components/Counter";

// Import all static data here
const details = {
  name: "Sailu",
  gender: "female",
};

function App() {
  const [state, setState] = useState(null);

  return (
    <div className="App">
      <Counter data={details} />
    </div>
  );
}

export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

//const App = () => {
//return (
//<div>
//<h1>My Title</h1>
//<h3> My second header </h3>
//<p> My Paragraph </p>
//{/* <button>{Button}</button>  */}
//{/* button with a child Button component */}
//</div>
//);
//};

//export default App;

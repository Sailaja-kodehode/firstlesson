// import logo from "./logo.svg";
// import "./App.css";
import Child from "./Components/Child.jsx";
import "./Components/Header.jsx";
import TextInput from "./Components/TextInput.jsx";
//import style from "./Components/GetInput.modules.css";

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
//           rel="no opener no referrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

const App = () => {
  return (
    <div>
      <h1>About Cats</h1>
      <TextInput />
      <Child />
      {/* <button>{Button}</button>  */}
      {/* button with a child Button component */}
    </div>
  );
};

export default App;

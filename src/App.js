// import logo from "./logo.svg";
// import "./App.css";
import "./Components/Header.jsx";
import TextInput from "./Components/TextInput.jsx";
//import style from "./Components/textInput.modules.css";

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
      <h1>My first Card</h1>
      <h3> My second card </h3>
      <h4> My Third Card </h4>
      <TextInput />
      {/* <button>{Button}</button>  */}
      {/* button with a child Button component */}
    </div>
  );
};

export default App;

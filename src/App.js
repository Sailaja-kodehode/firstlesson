// import logo from "./logo.svg";
import "./App.css";
import UseEffect from "./Components/Task/UseEffect";
import Context from "./Context/Pokom";
import Selector from "./Components/Task/Selector";
//import DisplayWrapper from "./Components/Task/DisplayWrapper";
import PokemonImageURL from "./Components/Task/ImageUrl";
//import Display from "./Components/Task/Display";

//import Child from "./Components/Child.jsx";
//import "./Components/Header.jsx";
//import TextInput from "./Components/TextInput.jsx";
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
      {/*<h1>About Cats</h1>*/}
      <h2>Pokeman</h2>
      {/* <TextInput /> */}
      <UseEffect />
      <PokemonImageURL />
      {/*<Selector />*}

      {/*<DisplayWrapper />*/}

      {/*<Display />*/}
      {/*<Child />*/}
      {/* <button>{Button}</button>  */}
      {/* button with a child Button component */}
    </div>
  );
};

export default App;

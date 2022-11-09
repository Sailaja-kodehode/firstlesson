// import logo from "./logo.svg";
// import "./App.css";
import "./Components/Header";
import "./App.css";
//component
import CardUsingProps from "./Components/CardUsingProps/CardUsingProps.jsx";

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

const App = () => {
  return (
    <div>
      <CardUsingProps title="first webpage react" paragraph=" This page" />

      <h1>My First React </h1>
      <h3>Hi, I am Sailaja</h3>
      <p>
        Jeg heter Sailaja og går på frontend development kurs hos kode hode.Jeg
        er en ambisiøs kvinne.Programmering for meg er
        kreativitet,problemløsning og jeg er lidenskapelig om ny teknologi . Jeg
        liker å lære ny teknologi .Jeg jobber like godt i team som
        selvstendig,er systematisk og har fokus på produktivitet og resultat.
        Jeg er omgjengelig, kreativ, punktlig,ærlig og har gode datakunnskaper.
        Fritid jeg elsker å være med barna mine.vi leker sammen og synger.Jeg
        liker å lese bøker også liker å spille badminton.
      </p>

      {/*<button>{Button}</button> */}
      {/* button with a child Button component */}
    </div>
  );
};

export default App;

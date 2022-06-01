import logo from "./logo.svg";
import "./App.css";
import OutputContainer from "./components/OutputContainer/OutputContainer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <OutputContainer time={200} lighter={true}>
          Welcome to AIPIM LAB
        </OutputContainer>

       
      </header>
    </div>
  );
}

export default App;

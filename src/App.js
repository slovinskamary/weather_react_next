import "./App.css";
import Weather from "./Weather";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello world!</h1>
        <Weather city="Copenhagen" />
      </header>
    </div>
  );
}

export default App;

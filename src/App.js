import "./App.css";
import Weather from "./Weather";

function App() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <div className="App">
      <h1>Weather App</h1>
      <Weather />
      <br />
      <hr />
      <p>
        Made with ❤️ ©{year} by <a href="https://github.com/Lornzyy">Lorna</a>{" "}
      </p>
    </div>
  );
}

export default App;

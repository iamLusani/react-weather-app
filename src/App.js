import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      {" "}
      <Weather city="Ermelo" />
      <br />
      <footer>
        This project was coded by{" "}
        <a href="https://github.com/iamLusani">Lusani</a>.{" "}
        <a href="https://github.com/iamLusani/react-weather-app">
          Open-sourcd on git-hub
        </a>{" "}
        and{" "}
        <a href="https://advance-weather-app-react.netlify.app/">
          hosted on netlify{" "}
        </a>
      </footer>{" "}
    </div>
  );
}

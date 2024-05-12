import Weather from "./Weather";
import Input from "./Input";

import "./App.css";

export default function App() {
  return (
    <div className="App container">
      <header>
        <Input />
      </header>
      <h1>
        {" "}
        <Weather />
      </h1>
    </div>
  );
}

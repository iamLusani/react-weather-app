import Weather from "./Weather";

import "./App.css";

export default function App() {
  return (
    <div className="App  container ">
      <header>
        <Input />
      </header>
      <h1>
        {" "}
        <Weather defualtCity="Durban" />
      </h1>
    </div>
  );
}

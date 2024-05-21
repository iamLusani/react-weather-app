import React, { useState } from "react";

export default function Units(props) {
  const [unit, setUnits] = useState("celsius");

  function displyF(event) {
    event.preventDefault();
    setUnits("fahrenheit");
  }

  function showC(event) {
    event.preventDefault();
    setUnits("celsius");
  }

  if (unit === "celsius") {
    return (
      <div>
        {Math.round(props.celsius)}
        <span className="sub-unit">
          °C |{" "}
          <a href="/" onClick={displyF}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div>
        {Math.round(props.celsius)}
        <span className="sub-unit">
          <a href="/" onClick={showC}>
            °C
          </a>{" "}
          | °F
        </span>
      </div>
    );
  }
}

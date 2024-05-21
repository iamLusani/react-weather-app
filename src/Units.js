import React from "react";

export default function Units(props) {
  return (
    <div>
      {Math.round(props.celsius)}
      <span className="sub-unit">°C</span>
    </div>
  );
}

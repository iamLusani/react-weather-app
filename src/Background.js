import React from "react";
import background from "./background.mp4";
import "./Weather.css";

function Background() {
  return (
    <div className="bgContainer">
      <div className="overlay">
        <video src={background} autoPlay loop muted />
      </div>
    </div>
  );
}
export default Background;

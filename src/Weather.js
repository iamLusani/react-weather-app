import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="container">
      <section>
        <div className="container">
          <div className="row">
            <div className="col-5">
              <h2>Cape Town, South Africa Weather</h2>
              <h1>17 °C</h1>
              <img
                src="https://icons.twnmm.com/wx_icons/v2/18.png"
                alt="moon icon"
              />{" "}
              <br />
              <small>Clear</small> <br />
            </div>
            <div className="col-5">
              <h2 className="heading">
                12:00:00 <br />
                Thursday 25 may
              </h2>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-4">
              <h4>Wind</h4>
              <p>26 km/h</p>
            </div>
            <div className="col-4">
              <h4>Humidity</h4>
              <p>80%</p>
            </div>
            <div className="col-4">
              <h4>Visibility</h4>
              <p>26 km</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import Background from "./Background.js";
import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div>
      <Background />
      <div className="cont">
        <div className="container">
          <div className="current-info">
            <div className="date-container">
              <div className="time">12:00</div>
              <div className="date">Monday, 18 july</div>

              <div className="others">
                <p>
                  Humidity <span className="space"> 54%</span> <br />
                  Humidity <span className="space"> 54%</span> <br />
                  Humidity <span className="space"> 54%</span> <br />
                  Humidity <span className="space"> 54%</span> <br />
                  Humidity <span className="space"> 54%</span>{" "}
                </p>
              </div>
            </div>
            <div className="place-container">
              <div className="time-zone">DURBAN, ZA</div>
              <div className="country">IN</div>
            </div>
          </div>
        </div>
        <div className="future-forcast">
          <div className="today">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
              alt="weather Icon "
              className="weather-icon"
            />
            <div className="others">
              <div className="day">Monday</div>
              <div className="temp">Night - 25.6 C</div>
              <div className="temp">Day - 35.6 C</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import Background from "./Background.js";
import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import "./App.css";

export default function Weather(props) {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});

  function handleResponse(response) {
    setWeatherData({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      sunrise: response.data.sys.sunrise,
      sunset: response.data.sys.sunset,
      time: response.data.dt,
      city: response.data.name,
      country: response.data.sys.country,
      max: response.data.main.temp_max,
      min: response.data.main.temp_min,
      description: response.data.weather[0].description,
    });
    setReady(true);
    console.log(response.data);
  }

  if (ready) {
    return (
      <div>
        <Background />
        <form>
          <input
            type="text"
            placeholder="Enter city.."
            className="inputForm"></input>
          <input type="submit" className="submitForm"></input>
        </form>
        <div className="cont">
          <div className="container">
            <div className="current-info">
              <div className="date-container">
                <div className="time">{weatherData.time}</div>
                <div className="date">{weatherData.time}</div>

                <div className="others">
                  <p>
                    wind <span className="space"> {weatherData.wind}</span>{" "}
                    <br />
                    Humidity{" "}
                    <span className="space"> {weatherData.humidity}</span>{" "}
                    <br />
                    Description{" "}
                    <span className="space">
                      {" "}
                      {weatherData.description}
                    </span>{" "}
                    <br />
                    sunrise{" "}
                    <span className="space"> {weatherData.sunrise}</span> <br />
                    sunset <span className="space">
                      {weatherData.sunset}
                    </span>{" "}
                  </p>
                </div>
              </div>
              <div className="place-container">
                <div className="time-zone">
                  {weatherData.city}, {weatherData.country}
                </div>
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
                <div className="day">{weatherData.time}</div>
                <div className="mainTemp">
                  {Math.round(weatherData.temperature)}
                </div>
                <div className="temp">
                  Max - {Math.round(weatherData.max)} C{" "}
                  <span className="not">
                    {" "}
                    Min - {Math.round(weatherData.min)} C
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "50c2acd53349fabd54f52b93c8650d37";

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return <div className="loading">loading....</div>;
  }
}

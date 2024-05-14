import React, { useState } from "react";
import FormateDate from "./FormateDate";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function getTemp(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humididty: response.data.main.humidity,
      feels: response.data.main.feels_like,
      description: response.data.weather[0].description,
      city: response.data.name,
      country: response.data.sys.country,
      visability: response.data.visibility,
      wind: response.data.wind.speed,
      time: new Date(response.data.dt * 1000),
    });
  }
  if (weatherData.ready) {
    return (
      <div>
        <section>
          <div className="container">
            <div className="row">
              <div className="col-5">
                <h2>
                  {weatherData.city}, {weatherData.country} Weather
                </h2>
                <h1>
                  {Math.round(weatherData.temperature)}
                  <span className="sub-unit">°C</span>
                  <span className="secondary-temp">
                    / feels like {Math.round(weatherData.feels)}{" "}
                    <span className="tertairy-unit">°C</span>
                  </span>
                </h1>
                <img
                  src="https://icons.twnmm.com/wx_icons/v2/18.png"
                  alt="description-icon"
                  className="float-left"
                />{" "}
                <br />
                <small>{weatherData.description}</small> <br />
              </div>
              <div className="col-7">
                <h2 className="heading">
                  <FormateDate date={weatherData.time} />
                </h2>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-4">
                <h4>Wind</h4>
                <p>{weatherData.wind} km/h</p>
              </div>
              <div className="col-4">
                <h4>Humidity</h4>
                <p>{weatherData.humididty}%</p>
              </div>
              <div className="col-4">
                <h4>Visibility</h4>
                <p>{weatherData.visability}km</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  } else {
    const apiKey = "2d96d64425dca1d6eda00d942a281c0d";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.defualtCity}&appid=${apiKey}&units=metric`;

    axios.get(url).then(getTemp);
    return "Loading....";
  }
}

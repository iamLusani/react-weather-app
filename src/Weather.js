import React, { useState } from "react";
import FormateDate from "./FormateDate";
import WeatherForcast from "./WeatherForcast";
import axios from "axios";
import "./Weather.css";
import Units from "./Units";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defualtCity);
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
      iconUrl: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }
  function search() {
    const apiKey = "2d96d64425dca1d6eda00d942a281c0d";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(getTemp);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search(city);
  }
  function changeCity(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Enter city.. "
            className="searchForm"
            onChange={changeCity}></input>
          <input type="submit" value="search" className="submitForm"></input>
        </form>
        <section>
          <div className="container">
            <div className="row">
              <div className="col-5">
                <h2>
                  {weatherData.city}, {weatherData.country} Weather
                </h2>{" "}
                <img
                  src={weatherData.iconUrl}
                  alt="description-icon"
                  className="float-left"
                />
                <h1>
                  <Units celsius={weatherData.temperature} />
                </h1>{" "}
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
          <WeatherForcast />
        </section>
        <footer>
          This project was coded by Lusani and it is open-sourced on github.
        </footer>
      </div>
    );
  } else {
    search();
    return "Loading....";
  }
}

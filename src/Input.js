import React, {useState} from "react";
import axios from "axios";
import "./Input.css";

export default function Input() {
  const [temperature, setTemperature] = useState (null)
  function getTemp(response) {
    console.log(response.data);
  }
  const apiKey = "2d96d64425dca1d6eda00d942a281c0d";
  let city = "Durban";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  axios.get(url).then(getTemp);
  return (
    <div>
      <form>
        <input
          type="search"
          placeholder="Enter city.. "
          className="searchForm"></input>
        <input type="submit" value="search" className="submitForm"></input>
      </form>
    </div>
  );
}

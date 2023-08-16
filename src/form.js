import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
export default function Form() {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});

  function displayWeather(response) {
    setLoaded(true);
    setWeather({
        temperature:response.data.main.temp,
        wind:response.data.wind.speed,
        humidity:response.data.main.humidity,
        description:response.data.weather[0].description,
        icon:`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    });
    console.log(response.data);
  }

  function handelSubmit(event) {
    event.preventDefault();
    let apiKey = "210d99196a88b9257ed8cb3535a0a0c5";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }
  let form = (
    <form className="row g-3" id="form-search" onSubmit={handelSubmit}>
      <div className="col-md-8">
        <input
          type="search"
          className="form-control rounded-pill"
          placeholder="Enter a city name"
          id="search-input"
          onChange={updateCity}
        />
      </div>
      <div className="col-md-4">
        <div
          className="btn-group"
          role="group"
          aria-label="Basic mixed styles example"
        >
          <button type="submit" id="btn-search" className="btn btn-primary">
            search
          </button>

          <button
            type="button"
            id="current-location-button"
            className="btn btn-success"
          >
            current
          </button>
        </div>
      </div>
    </form>
  );

  if (loaded) {
    return (<>
    {form}
    <ul>
    <li>Temperature: {Math.round(weather.temperature)}°C</li>
          <li>Description: {weather.description}</li>
          <li>Humidity: {weather.humidity}%</li>
          <li>Wind: {weather.wind}km/h</li>
          <li>
            <img src={weather.icon} alt={weather.description} />
          </li>
    </ul>
    
    </>)
  } else {
    return form;
  }
}

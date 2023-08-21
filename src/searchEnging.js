import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";

import "./App.css";

export default function SearchEnging(prop) {
  const [city, setCity] = useState("");
  // const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({loaded:false});

  function displayWeather(response) {
    
    setWeather({
      loaded:true,
      temperature: response.data.main.temp,
      city: response.data.name,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
    console.log(response.data);
    setCity();
  }

  function handelSubmit(event) {
    event.preventDefault();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }
  if (weather.loaded) {
    return (
      <>
        <div className="bg-image h-100">
          <div className="mask d-flex align-items-center h-100">
            <div className="container">
              <div className="wrapping">
                <div className="d-flex flex-row mb-2 fw-bold ">
                  <div className="p-2 ">
                    <a href="#" className="text-black" id="Paris">
                      Paris
                    </a>
                  </div>
                  <div className=" p-2">
                    <a href="#" className="text-black" id="Lisbon">
                      Lisbon
                    </a>
                  </div>
                  <div className=" p-2">
                    <a href="#" className="text-black" id="Tokyo">
                      Tokyo
                    </a>
                  </div>
                  <div className="p-2">
                    <a href="#" className="text-black" id="Oslo">
                      Oslo
                    </a>
                  </div>
                </div>
                <div>
                  <form
                    className="row g-3"
                    id="form-search"
                    onSubmit={handelSubmit}
                  >
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
                        <button
                          type="submit"
                          id="btn-search"
                          className="btn btn-primary"
                        >
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
                </div>
                <div className="container text-center mb-2">
                  <div className="row">
                    <div className="col-md-4 fw-semibold">
                      <h3 id="city">{weather.city}</h3>

                      <ul className="weatherTemp">
                        <li id="localTime">time:Wednesday 9:16</li>
                        <li>
                          <img src="" alt="" id="icon" />
                          <span id="temperature"></span>
                          <span className="active">
                            {Math.round(weather.temperature)}°C{" "}
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-4 fw-bold" id="frsWeatherInfo">
                      <ul>
                        <li>
                          humidity: {weather.humidity}
                          <span id="humidity"></span>%
                        </li>
                        <li>
                          wind: {weather.wind}
                          <span id="wind"></span> km/h
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-4 fw-bold" id="scdWeatherInfo">
                      <ul>
                        <li>{weather.description}</li>
                        <li id="description"></li>
                        <li>
                          <img src={weather.icon} alt={weather.description} />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-row mb-3 text-center justify-content-around">
                  <div className="p2">
                    <div className="card h-100 rounded-pill">
                      <div className="card-body">
                        <h5
                          className="card-title fw-semibold"
                          id="weather-forcast-date"
                        >
                          thu
                        </h5>
                        <ul className="forcastDays">
                          <li
                            className="card-text"
                            id="weather-forcast-tempratures"
                          >
                            <span className="weather-forcast-temp-max">
                              10°
                            </span>{" "}
                            <span className="weather-forcast-temp-min">9°</span>
                          </li>
                          <li>
                            <img
                              src="http://openweathermap.org/img/wn/${
                    forcastDay.weather[0].icon
                  }@2x.png"
                              width="42"
                              alt=""
                              id="icon"
                            />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="p2">
                    <div className="card h-100 rounded-pill">
                      <div className="card-body">
                        <h5
                          className="card-title fw-semibold"
                          id="weather-forcast-date"
                        >
                          Fri
                        </h5>
                        <ul className="forcastDays">
                          <li
                            className="card-text"
                            id="weather-forcast-tempratures"
                          >
                            <span className="weather-forcast-temp-max">
                              10°
                            </span>
                            <span className="weather-forcast-temp-min">8°</span>
                          </li>
                          <li>
                            <img
                              src="http://openweathermap.org/img/wn/${
                    forcastDay.weather[0].icon
                  }@2x.png"
                              width="42"
                              alt=""
                              id="icon"
                            />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="p2">
                    <div className="card h-100 rounded-pill">
                      <div className="card-body">
                        <h5
                          className="card-title fw-semibold"
                          id="weather-forcast-date"
                        >
                          Sat
                        </h5>
                        <ul className="forcastDays">
                          <li
                            className="card-text"
                            id="weather-forcast-tempratures"
                          >
                            <span className="weather-forcast-temp-max">
                              15°
                            </span>
                            <span className="weather-forcast-temp-min">
                              10°
                            </span>
                          </li>
                          <li>
                            <img
                              src="http://openweathermap.org/img/wn/${
                    forcastDay.weather[0].icon
                  }@2x.png"
                              width="42"
                              alt=""
                              id="icon"
                            />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="p2">
                    <div className="card h-100 rounded-pill">
                      <div className="card-body">
                        <h5
                          className="card-title fw-semibold"
                          id="weather-forcast-date"
                        >
                          Sun
                        </h5>
                        <ul className="forcastDays">
                          <li
                            className="card-text"
                            id="weather-forcast-tempratures"
                          >
                            <span className="weather-forcast-temp-max">
                              10°
                            </span>
                            <span className="weather-forcast-temp-min">4°</span>
                          </li>
                          <li>
                            <img
                              src="http://openweathermap.org/img/wn/${
                    forcastDay.weather[0].icon
                  }@2x.png"
                              width="42"
                              alt=""
                              id="icon"
                            />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="p2">
                    <div className="card h-100 rounded-pill">
                      <div className="card-body">
                        <h5
                          className="card-title fw-semibold"
                          id="weather-forcast-date"
                        >
                          Mon
                        </h5>
                        <ul className="forcastDays">
                          <li
                            className="card-text"
                            id="weather-forcast-tempratures"
                          >
                            <span className="weather-forcast-temp-max">
                              15°
                            </span>
                            <span className="weather-forcast-temp-min">
                              12°
                            </span>
                          </li>
                          <li>
                            <img
                              src="http://openweathermap.org/img/wn/${
                    forcastDay.weather[0].icon
                  }@2x.png"
                              width="42"
                              alt=""
                              id="icon"
                            />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex flex-row mb-2 fw-bold justify-content-center">
          <span>
            <p>
              <span>
                <a
                  target="_blank"
                  href="https://github.com/samikia/weather-react-app"
                >
                  open source code
                </a>
              </span>
              ,by Samira Kian
            </p>
          </span>
        </div>
      </>
    );
  } else {
    let apiKey = "ae8a1230e3e8427c36d183396c097b5c";
    
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${prop.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(url).then(displayWeather);
    return "Loading...";
  }
}

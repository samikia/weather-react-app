import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Form from "./form";
import "./App.css";

export default function SearchEnging() {
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
              <Form />
              <div className="container text-center mb-2">
                <div className="row">
                  <div className="col-md-4 fw-semibold">
                    <h3 id="city">New York</h3>
                    <ul>
                      <ul className="weatherTemp">
                        <li id="localTime">time:Wednesday 9:16</li>
                        <li>
                          <img src="" alt="" id="icon" />
                          <span id="temperature"></span>
                          <span className="active">21°C </span>
                        </li>
                      </ul>
                    </ul>
                  </div>
                  <div className="col-md-4 fw-bold" id="frsWeatherInfo">
                    <ul>
                      <li>
                        Humidity:81<span id="humidity"></span>%
                      </li>
                      <li>
                        Wind: 4<span id="wind"></span> km/h
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-4 fw-bold" id="scdWeatherInfo">
                    <ul>
                      <li>Weather:Clouds</li>
                      <li id="description"></li>
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
                          <span className="weather-forcast-temp-max">10°</span>{" "}
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
                          <span className="weather-forcast-temp-max">10°</span>
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
                          <span className="weather-forcast-temp-max">15°</span>
                          <span className="weather-forcast-temp-min">10°</span>
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
                          <span className="weather-forcast-temp-max">10°</span>
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
                          <span className="weather-forcast-temp-max">15°</span>
                          <span className="weather-forcast-temp-min">12°</span>
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
              <a target="_blank" href="https://github.com/samikia/weather-react-app">
                open source code
              </a>
            </span>
            ,by Samira Kian
          </p>
        </span>
      </div>
    </>
  );
}

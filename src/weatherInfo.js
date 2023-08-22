import React from "react";
import FormatDate from "./formatDate";
export default function WeatherInfo(props) {
  return (
    <div className="weatherInfo mt-3">
      <div className="container text-center mb-2">
        <div className="row">
          <div className="col-md-4 fw-semibold">
            <h3 id="city">{props.data.city}</h3>

            <ul className="weatherTemp">
            <li>
                <img src="" alt="" id="icon" />
                <span id="temperature"></span>
                <span className="active">
                  {Math.round(props.data.temperature)}°C{" "}
                </span>
              </li>
              <li id="localTime">
                <FormatDate date={props.data.date} />
              </li>
              
            </ul>
          </div>
          <div className="col-md-4 fw-bold" id="frsWeatherInfo">
            <ul>
              <li>
                humidity: {props.data.humidity}
                <span id="humidity"></span>%
              </li>
              <li>
                wind: {props.data.wind}
                <span id="wind"></span> km/h
              </li>
            </ul>
          </div>
          <div className="col-md-4 fw-bold" id="scdWeatherInfo">
            <ul>
              <li>{props.data.description}</li>
              <li id="description"></li>
              <li>
                <img
                  src={props.data.icon}
                  alt={props.data.description}
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

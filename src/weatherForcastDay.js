import React from "react";
import WeatherIcon from "./WeatherIcon";
export default function WeatherForcastDay(props) {
    function maxTemp(){
        let temperature=Math.round(props.forcast.temp.max)
        return `${temperature}`
    }
    function minTemp(){
        let temperature=Math.round(props.forcast.temp.min)
        return `${temperature}`
    }
    function day(){
        let date=new Date(props.forcast.dt*1000)
        let day=date.getDay()
        let days=['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
        return days[day]
    }
  return (
    <>
      <h5 className="card-title fw-semibold" id="weather-forcast-date">
        {day()}
      </h5>
      <ul className="forcastDays">
        <li>
          <WeatherIcon icon={props.forcast.weather[0].icon} size={36} />
        </li>
        <li className="card-text" id="weather-forcast-tempratures">
          <span className="weather-forcast-temp-max">
            {maxTemp()}°
          </span>{" "}
          <span className="weather-forcast-temp-min">
            {minTemp()}°
          </span>
        </li>
      </ul>
    </>
  );
}

import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import WeatherIcon from "./WeatherIcon";
import WeatherForcastDay from "./weatherForcastDay";
export default function WeatherForcast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forcast, setForcast] = useState(null);
  function handelResponse(response) {
    
    setForcast(response.data.daily);
    setLoaded(true);
  }
  useEffect(()=>{
setLoaded(false)
  },[props.coords])
  if (loaded) {
    
    return (
      <>
        {forcast.map((dailyForcast, index) => {
          if (index < 5) {
            return (
              <div className="p2"key={index}>
                <div className="card h-100 rounded-pill">
                  <div className="card-body" >
                    <WeatherForcastDay forcast={dailyForcast} />
                  </div>
                </div>
              </div>
            );
          }
        })}
      </>
    );
  } else {
    let key = "4b3503b2f08a729413c4d33ef1186004";
    let long = props.coords.lon;
    let lat = props.coords.lat;
    let api = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=${key}&units=metric`;
    axios.get(api).then(handelResponse);
    return null;
  }
}

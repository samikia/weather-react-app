import React, { useState } from "react";
export default function WeatherTemp(props) {
  const [unit, setUnit] = useState("celsius");
  function convertFaren(event) {
    event.preventDefault();

    setUnit("faren");
  }
  function convertClis(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  if (unit === "celsius") {
    return (
      <div className="weatherChange">
        <span id="temperature"></span>
        <span className="active">{Math.round(props.celsius)}</span>
        <span className="farenhit">
          °C |{" "}
          <a href="/" onClick={convertFaren}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    let faren = (props.celsius * 9) / 5 + 32;
    return (
      <div className="weatherChange">
        <span id="temperature"></span>
        <span className="active">{Math.round(faren)}</span>
        <span className="farenhit">
          <a href="/" onClick={convertClis}>
            °C
          </a>{" "}
          |°F
        </span>
      </div>
    );
  }
}

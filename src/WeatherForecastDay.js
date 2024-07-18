import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    return `${Math.round(props.data.temperature.maximum)}°`;
  }

  function minTemperature() {
    return `${Math.round(props.data.temperature.minimum)}°`;
  }

  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  // Ensure props.data.condition exists before accessing its properties
  const iconCode = props.data.condition?.icon;

  return (
    <div className="WeatherForecastDay">
      <div className="WeatherForecast-day">{day()}</div>
      {iconCode ? (
        <WeatherIcon code={iconCode} />
      ) : (
        <div className="missing-icon">Icon Not Available</div>
      )}
      <div className="WeatherForecast-temperatures">
        <span className="WeatherForecast-temperature-max">
          {maxTemperature()} |
        </span>
        <span className="WeatherForecast-temperature-min">
          {minTemperature()}
        </span>
      </div>
    </div>
  );
}

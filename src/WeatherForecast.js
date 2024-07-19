import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import ForecastDay from "./WeatherForecastDay";
import axios from "axios";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecastData, setForecastData] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setForecastData(response.data.daily);
    setLoaded(true);
  }

  function load() {
    let apiKey = "ae997t30869fc345038bf7f0abaao7e6";
    let units = "metric";
    let longitude = props.coordinates.longitude;
    let latitude = props.coordinates.latitude;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lat=${latitude}&lon=${longitude}&key=${apiKey}&units=${units}`;

    axios.get(apiUrl).then(handleResponse);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          {forecastData.map(function (dailyForecast, index) {
            if (index < 6)
              return (
                <div className="col" key={index}>
                  <ForecastDay data={dailyForecast} />
                </div>
              );
            else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    load();

    return null;
  }
}
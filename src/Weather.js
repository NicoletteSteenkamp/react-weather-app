import React, {useState} from "react";
import "./Weather.css";
import axios from "axios";


export default function Weather(props){
    const [ready,setReady]=useState(false);

    const [weatherData,setWeatherData]=useState({ready:false});
    function handleResponse(response){
    setWeatherData({
            ready:true,
            city: response.data.city,
            temperature: Math.round(response.data.temperature.current),
            date: new Date(response.data.time*1000),
            humidity: response.data.temperature.humidity,
            wind: Math.round(response.data.wind.speed),
            conditions: response.data.condition.description,
            icon: response.data.condition.icon_url,
            iconDescription:response.data.condition.icon,
          });

       
    }
    function search(){
        const apiKey = "https://api.shecodes.io/weather/v1/current?query={query}&key={key}";
        const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
    }

    function handleSubmit(event){
        event.preventDefault();
        search();
        
    }
    function handleCityChange(event){
        setCity(event.target.value);
        
    }
    if (weatherData.ready) {
        return (
          <div className="Weather">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-9">
                  <input
                    type="search"
                    placeholder="Enter a city"
                    className="form-control"
                    onChange = {handleCityChange}
                  />
                </div>
                <div className="col-3">
                  <input
                    type="submit"
                    value="Search"
                    className="btn btn-primary"
                  />
                </div>
              </div>
            </form>
            <WeatherInfo data={weatherData}/>
            </div>
        );
    } else {
    search();
    return "loading...Please wait..."
    }

    
}
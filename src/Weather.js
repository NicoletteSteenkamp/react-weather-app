import React, {useState} from "react";
import "./Weather.css";
import axios from "axios";


export default function Weather(){
    const [ready,setReady]=useState(false);
    const [weatherData,setWeatherData]=useState({ready:false});
    function handleResponse(response){
        setWeatherData({tempertature:response.data.main.temp,
            city:response.data.name,
            wind:response.data.wind.speed,
            humidity:response.data.main.humidity,
            date:"Thursday 11:41",
            ready:true,
        })

        setReady(true);
    }
    if (ready){ return <div className="Weather">
        <form>
            <div className="row">
                <div className="col-9">
            <input type="search" placeholder="Search for a city.." className="form-contol w-100"autoFocus="on"/>
            
            </div>
            <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary w-100"/>
            </div>
            </div>
        </form>
        <h1>{weatherData.city}</h1>
    <ul>
        <li>Wednesday 11:43</li>
        <li>{weatherData.description}</li>
    </ul>
    <div className="row mt-3">
        <div className="col-6">
            
            <div className="clearfix">
            <img src="{weatherData.icon}" alt="{weatherData.description}" className="float-left"/>
            <div className="float-left">
            <span className="temperature">20</span><span className="unit">°C</span>
        </div>
        </div>
        </div>
        <div className="col-6">
            <ul>
                <li>Precipitation: 0%</li>
                <li>Humidity: {weatherData.humidity}</li>
                <li>Wind: {weatherData.wind}</li>
            </ul>
        </div>
    </div>
    </div>}
    else{
    const apiKey="ae997t30869fc345038bf7f0abaao7e6";
    let city="Boksburg"
    let apiUrl=`https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading.....";
   
}}
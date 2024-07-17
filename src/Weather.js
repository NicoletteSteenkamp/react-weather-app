import React from "react";
import "./Weather.css";
export default function Weather(){
    return <div className="Weather">
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
        <h1>Boksburg</h1>
    <ul>
        <li>Wednesday 11:43</li>
        <li>Sunny</li>
    </ul>
    <div className="row mt-3">
        <div className="col-6">
            
            <div className="clearfix">
            <img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" alt="sunny" className="float-left"/>
            <div className="float-left">
            <span className="temperature">20</span><span className="unit">°C</span>
        </div>
        </div>
        </div>
        <div className="col-6">
            <ul>
                <li>Precipitation: 0%</li>
                <li>Humidity: 17%</li>
                <li>Wind: 8 km/h</li>
            </ul>
        </div>
    </div>
    </div>
}
import React from "react"
import Weather from "./Weather"
import './App.css';

 export default function App() {
  return (
    
    <div className="App">
      <div className="container">
      <h1>Weather App </h1>
      <Weather />
    <footer>
      This app is coded by Nicolette Steenkamp and is 
    <a href="https://github.com/NicoletteSteenkamp/weather-app-project" target="blank"> open-sourced on Github </a>
    </footer> 
    </div>
    </div>
  );
}



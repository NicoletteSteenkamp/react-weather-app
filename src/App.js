import React from "react"
import Weather from "./Weather"
import './App.css';

 export default function App() {
  return (
    
    <div className="App">
      <div className="container">
      
      <Weather defaultCity="Boksburg"/>
    <footer>
      This app is coded by <a href="https://github.com/NicoletteSteenkamp">Nicolette Steenkamp</a> and is open-sourced on{" "}
    <a href="https://github.com/NicoletteSteenkamp/weather-app-project" target="blank">Github </a>
    </footer> 
    </div>
    </div>
  );
}



import React from "react";

const WeatherDisplay = ({weather}) => (
    <div id='data'>
    <h1 id='cityName' style={{color:"#F19E40"}}>Karachi</h1>

    <h2>Weather</h2>
    <h4>Headline: <strong id='headline' style={{color:"#F19E40"}}>{weather.Headline}</strong></h4>

    <h4>MinTemperature: <strong id='minTemperature' style={{color:"#F19E40"}}>{weather.MinTemperature}</strong> C</h4>
    <h4>MaxTemperature: <strong id='maxTemperature' style={{color:"#F19E40"}}>{weather.MaxTemperature}</strong> C</h4>

    <h4>Day: <strong id='day' style={{color:"#F19E40"}}>{weather.Day}</strong></h4>
    <h4>Night: <strong id='night' style={{color:"#141852"}}>{weather.Night}</strong></h4>


</div>
);

export default WeatherDisplay;

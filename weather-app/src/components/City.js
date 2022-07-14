import React from "react";
import { useParams, useNavigate } from 'react-router-dom';
import './City.css';

function City({onFilter}) {
    let navigate = useNavigate();
    let {id} = useParams();
    let city = onFilter(id);

 
    return (
        <div className="city">
            <div className="city-container">
                <h2 className="city-name">{city.name}</h2>
                <div className="city-info">
                    <div> Temp: {city.temp}°C</div>
                    <div> Weather: {city.weather}</div>
                    <div> Wind: {city.wind}</div>
                    <div> Clouds: {city.clouds} %</div>
                    <div> Humidity: {city.humidity}%</div>
                    <div> Lat: {city.lat}°</div>
                    <div> Lon: {city.lon}°</div>

                </div>
            </div>
            <button className="back" onClick={() => navigate('/')}>Go Home</button>
        </div>
    )
}

export default City;
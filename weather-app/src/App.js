import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import { Outlet } from 'react-router-dom';

import Nav from './components/Nav';
import About from './components/About';
import City from './components/City';
import Cards from './components/Cards';

const apiKey = '4ae2636d8dfbdc3044bede63951a019b';

function App({onFilter}) {
  const [cities, setCities] = useState([]);
  const navigate = useNavigate();

  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id !== id))
  }

  function onSearch(ciudad) {
      fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}`)
      .then(r => r.json())
      .then((response) => {
        if(response.main !== undefined) {
          const citieElement = {
            min: Math.round(response.main.temp_min),
            max: Math.random(response.main.temp_max),
            id: response.id,
            wind: response.wind.speed,
            temp: response.main.temp,
            name: response.name,
            weather: response.weather[0].main,
            clouds: response.clouds.all,
            lat: response.coord.lat,
            lon: response.coord.lon
          };
          if(cities.find(el => el.id === response.id)) {
            return alert('The city is already requested');
          } else {
            setCities(oldCities => [...oldCities, citieElement]);
            navigate('/');
          }
        } else {
          alert('City not finded')
        };
      });
    }

    console.log(cities);

  return (
    <div className="App">
      <Nav onSearch={onSearch}/>
      <main>
        <Outlet>
          <Cards cities={cities} onClose={onClose}/> 
          <City onFilter = {onFilter}/>
        </Outlet>
      </main>
    </div>
  );
}

export default App;

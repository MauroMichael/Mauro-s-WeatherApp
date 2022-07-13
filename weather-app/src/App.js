import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import swal from 'sweetalert';

import Nav from './components/Nav';
import About from './components/About';
import City from './components/City';
import Cards from './components/Cards';

const apiKey = '4ae2636d8dfbdc3044bede63951a019b';

function App() {
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
            min: Math.round(response.main.temp_min - 273.15),
            max: Math.round(response.main.temp_max - 273.15),
            id: response.id,
            wind: response.wind.speed,
            temp: Math.round(response.main.temp - 273.15),
            name: response.name,
            weather: response.weather[0].main,
            clouds: response.clouds.all,
            lat: response.coord.lat,
            lon: response.coord.lon,
            img: response.weather[0].icon
          };
          if(cities.find(el => el.id === response.id)) {
            return swal('Hey!', 'The city is already requested!', 'warning');
          } else {
            setCities(oldCities => [...oldCities, citieElement]);
            navigate('/');
          }
        } else {
          swal('Oops!', 'City not finded!', 'error')
        };
      });
    }

      function onFilter(id) {
        const fullCitie = cities.filter(c => c.id === parseInt(id));
        if(fullCitie.length > 0) {
          return fullCitie[0];
        } else {
          return null
        }
      }


  return (
    <div className="App">
        <Nav onSearch={onSearch}/>
      <Routes>
        <Route exact path='/' element={<Cards cities={cities} onClose={onClose}/>}/> 
        <Route path='/city/:id' element={<City onFilter = {onFilter}/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </div>
  );
}

export default App;

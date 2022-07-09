import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {createRoot} from "react-dom/client";
import About from './components/About';
import Cards from './components/Cards';
import Ciudad from './components/Ciudad';

const root = createRoot(document.getElementById("root"));

root.render(  
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
        <Route path='/about' element={<About />} />
        <Route exact path='/' element={<Cards />} />
        <Route exact path='/ciudad/:ciudadId' element={<Ciudad />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import './App.css';
import { Routes, Route, Outlet } from 'react-router-dom';
import Nav from './components/Nav';
import About from './components/About';
import Ciudad from './components/Ciudad';
import Cards from './components/Cards';

function App() {
  return (
    <div className="App">
      <Nav/>
      <main>
        <Outlet/>
      </main>
    </div>
  );
}

export default App;

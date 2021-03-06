import React from "react";
import { Link } from "react-router-dom";
import Logo from '../../src/logo.png'
import Searchbar from "./SearchBar";
import './Nav.css'

function Nav({onSearch}) {
    return(
        <nav className="navbar">
            <Link to='about'>
                <span id = 'about'>About</span>
            </Link>
            <Link to ='/'>
                <span className="navbar-brand">
                    <img id='logoMauro' src={Logo} with='30' height='30' alt='' />
                   <p className="app-name">Mauro's Weather App</p> 
                </span>
            </Link>
            <Searchbar onSearch={onSearch}/>
        </nav>
    )
}

export default Nav;
import React from "react";
import { Link } from "react-router-dom";
import Logo from '../../src/logo.png'
import Searchbar from "./SearchBar";
import './Nav.css'

function Nav({onSearch}) {
    return(
        <nav className="navbar">
            <Link to ='/'>
                <span className="navbar-brand">
                    <img id='logoMauro' src={Logo} with='30' height='30' alt='' />
                    Mauro's Weather App
                </span>
            </Link>
            <Link to='about'>
                <span id = 'about'>About</span>
            </Link>
            <Searchbar onSearch={onSearch}/>
        </nav>
    )
}

export default Nav;
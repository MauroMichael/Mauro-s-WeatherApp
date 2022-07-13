import React, { useState } from "react";
import './SearchBar.css'

function Searchbar({onSearch}) {
    const [city, setCity] = useState('');

    function searchSubmit(e) {
        e.preventDefault();
        onSearch(city);
        setCity('');
    }

    function searchChange(e) {
        setCity(e.target.value)
    }
    return (
        <form className='form' onSubmit={searchSubmit}>
            <input className="text-input"
            type='text'
            placeholder="City..."
            value={city}
            onChange={searchChange}
            />
            <input className='submit-input' type='submit' value='Add City' />
        </form>
    )
}

export default Searchbar;
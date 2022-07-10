import React, { useState } from "react";

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
        <form onSubmit={searchSubmit}>
            <input 
            type='text'
            placeholder="City..."
            value={city}
            onChange={searchChange}
            />
            <input type='submit' value='Add City' />
        </form>
    )
}

export default Searchbar;
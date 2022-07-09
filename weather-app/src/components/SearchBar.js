import React, { useState} from "react";

function Searchbar({onSearch}) {
    const [city, setCity] = useState('');

    function searchSubmit(e) {
        e.prevent.default();
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
            placeholder="Ciudad..."
            value={city}
            onChange={searchChange}
            />
            <input type='submit' value='Agregar' />
        </form>
    )
}

export default Searchbar;
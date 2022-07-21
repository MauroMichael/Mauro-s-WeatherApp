import React from "react";
import Card from './Card.js';
import './Cards.css';
 
function Cards({cities, onClose}) {
    return (
        <>
        {
        cities.length === 0 ? <h1>No cities added</h1>:
        <div className="cards-container">
            {
                cities?.map(c => <Card
                    key = {c.id}
                    name = {c.name}
                    min = {c.min}
                    max = {c.max}
                    img = {c.img}
                    id = {c.id}
                    onClose = {() => onClose(c.id)}/>
                    
                    )
                }
        </div>
}
        </>
    )
}

export default Cards;
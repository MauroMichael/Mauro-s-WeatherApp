import React from "react";
import Card from './Card.js';
 
function Cards({cities, onClose}) {
    console.log(cities)
    return (
        <>
        <div>
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
        </>
    )
}

export default Cards;
import React from "react";
import './Card.css';
import { Link } from "react-router-dom";

function Card({min, max, name, img, onClose, id}) {
    return ( 
        <div className="card">
            <div id='close-icon'>
                <button onClick={onClose} className='button-close'>X</button>
            </div>
            <div className="body-card">
                <Link to= {`city/${id}`}>
                    <h5 className="title-card">Name:{name}</h5>
                </Link>
                <div className="content">
                    <div className="temp">
                        <p>Min: </p>
                        <p>{min}°</p>
                    </div>
                    <div className="temp">
                        <p>Max: </p>
                        <p>{max}°</p>
                    </div>
                    <div className="temp">
                        <img className="icon-weather" src={"http://openweathermap.org/"+img+"/wn/01d@2x.png"} alt='img' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;
import React from "react";
import './Card.css'

export default function Card({name, flag, continent, capital, population, id}){
    return(
        <div className="cardContainer">

            <h3 className="name">{name}</h3>
            <img className="flagImg" src={flag} alt="Image not Found" height= "15vh" width='15vh'/>
        
            <div className="infoContainer">
                <h5>Continent: {continent}</h5>
                <h5>Capital: {capital}</h5>
                <h5>Population: {population}</h5>    
            </div>
        
        </div>
    )
}
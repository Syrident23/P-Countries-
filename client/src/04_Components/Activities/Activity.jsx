import React from "react";
import './Activity.css'

export default function Activity({name, dificulty, season, duration, countryId}) {
    return(
        <div>
            <h2 className="activityContainer">{name}</h2>
            <h5>Season: {season}</h5>
            <h5>Dificulty: {dificulty}</h5>
            <h5>Duration: {duration}</h5>
            <h5>{countryId}</h5>
        </div>
    )
}
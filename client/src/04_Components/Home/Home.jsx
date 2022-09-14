import React from "react";
import Cards from '../Cards/Cards'
import NavBar from '../NavBar/NavBar'

export default function Home(){

    return(
        <div className="homeContainer">
            <div className="NavBar">
                <NavBar/>
            </div>
            <div className="Cards">
                <Cards/>
            </div>
        </div>
    )

}


import React from "react";
import './Paginate.css'

export default function Paginado({countriesPerPage, countries, paginate}){
    const pageNumbrers = []
    for (let i = 1; i <= Math.ceil(countries/countriesPerPage); i++) {
        pageNumbrers.push(i)   
    }
    return(
        <nav className='paginateContainer'>
            <ul className ='ul'>
                {pageNumbrers && 
                pageNumbrers.map(number =>(
                    <li key={number}>
                        <a 
                        className ='paginateNumber' 
                        
                        onClick={()=>paginate(number)}> 
                        {number} 
                        </a>  
                    </li> 
                ))}
            </ul>
        </nav>
    )
}
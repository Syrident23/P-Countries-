import React from "react";


export default function Paginado({countriesPerPage, countries, paginate}){
    const pageNumbrers = []
    for (let i = 1; i <= Math.ceil(countries/countriesPerPage); i++) {
        pageNumbrers.push(i)   
    }
    return(
        <nav className='paginadoContainer'>
            <ul className ='ul'>
                {pageNumbrers && 
                pageNumbrers.map(number =>(
                    <li key={number}>
                        <a 
                        className ='numeroPaginado' 
                        
                        onClick={()=>paginate(number)}> 
                        {number} 
                        </a>  
                    </li> 
                ))}
            </ul>
        </nav>
    )
}
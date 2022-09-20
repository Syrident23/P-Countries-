
import {useDispatch, useSelector} from 'react-redux'
import { getCountries, filterByContinent, orderByPopulation, orderByName, getActivities, filterByActivity } from "../../03_Actions/actionsIndex";
import NavBar from '../NavBar/NavBar'
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Card from "../Cards/Card";
import { useState } from "react";
import Paginate from '../Paginate/Paginate'


export default function Home(){

    const dispatch = useDispatch();

    const countries = useSelector((state) => state.countries);
    const activities = useSelector((state) => state.activities)

    const [currentPage, setCurrentPage] = useState(1);
    const [countriesPerPage] = useState(10);
    const lastCountry = currentPage * countriesPerPage;
    const firstCountry = lastCountry - countriesPerPage;
    const currentCountry = countries.slice(firstCountry, lastCountry);
    const [, setOrder] = useState("");


const paginate = (pageNumber)=>{
    setCurrentPage(pageNumber)
}




function reloadButton(e){
    e.preventDefault();
    dispatch(getCountries())
}

function handleFilterContinent(e){
    
    dispatch(filterByContinent(e.target.value))
    setCurrentPage(1)
}

function filterActivity(e){
    dispatch(filterByActivity(e.target.value))
    setCurrentPage(1)
}

function handleOrderByName(e){
    e.preventDefault()
    dispatch(orderByName(e.target.value))
    setCurrentPage(1)
    setOrder(`Ordered ${e.target.value}`)
}

function handleOrderByPopulation(e){
    e.preventDefault()
    dispatch(orderByPopulation(e.target.value))
    setCurrentPage(1)
    setOrder(`Ordered ${e.target.value}`)
}

useEffect(()=>{
    dispatch(getCountries())
    dispatch(getActivities())
},[dispatch])
    return(
        <div className="homeContainer">
            <div className="navBar">
                <NavBar/>
            </div>
            <div className='filters'>
                <button onClick={e=> {reloadButton(e)}}>
                    Reload
                </button>
                <select className="orderByName" onChange={(e) => handleOrderByName(e)}>
                    <option>Order By Name</option>
                    <option value="DESC" >A-Z</option>
                    <option value="ASC" >Z-A</option>
                </select>
                <select className="OrderByPopulation" onChange={(e) => handleOrderByPopulation(e)}>
                    <option >Order by Population</option>
                    <option value="HIGHER">Higher Population</option>
                    <option value="LESS">Less Population</option>
                </select>
                <select onChange={(e) => filterActivity(e)}>
                    <option value="ALL">Activities</option>
                    {
                        activities?.map((a)=> (
                            <option key={a.name} value={a.name}>{a.name}</option>
                        ))
                    }
                </select>
                <select className="filterByContinent" onChange={(e) => handleFilterContinent(e)}>
                    <option>Filter By Continent</option>
                    <option value="ALL">Todos</option>
                    <option value="Africa">Africa</option>
                    <option value="Antarctica">Antarctica</option>
                    <option value="North America">Nort America</option>
                    <option value="South America">South America</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                    
                </select>
            </div>

            <Paginate
                countriesPerPage={countriesPerPage}
                countries={countries.length}
                paginate={paginate}
            />

            <div className="cards">
                {currentCountry.map(c =>{
                    return(
                        <div key = {c.id}>
                            <Link to={'/home/' + c.id}>
                                <Card 
                                    name = {c.name} 
                                    flag = {c.flag}
                                    continent = {c.continent}
                                    capital = {c.capital}
                                    population = {c.population}                                    
                                    />
                            </Link>    
                        </div>    
                        )
                    })
                }
            </div>
        </div>
    )

}


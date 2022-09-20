import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import {searchCountries} from '../../03_Actions/actionsIndex'

export default function Search(){
    
    const [search, setSearch] = useState('')
    const dispatch = useDispatch()

    function handleChange(e){
        e.preventDefault()
        setSearch(e.target.value)
    }
    
    function handleSubmit(e){
        e.preventDefault()
        if(search.length === 0 ) return alert('Please enter a city name')
        dispatch(searchCountries(search))
        setSearch('')

    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input className="searchInput" type="text" placeholder="Search Cities" onChange={handleChange} value={search} />
                <input className="searchButton" type="submit" />
            </form>
        </div>
    )
}
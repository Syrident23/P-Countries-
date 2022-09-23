import React from "react";
import { Link } from "react-router-dom";
import Search from "../SearchBar/SearchBar";
import './NavBar.css'

export default function NavBar(){
return(
    <div className="navBar">
        <h2 className="tittle">COUNTRIES</h2>
        <div className="navigation">
        
            <Link className="home" to={'/home'}>Home</Link>
            <Link className="activity" to={'/activity'}>Create Activity</Link>
            <Link className="activities" to={'/activities'}>List of Activities</Link>
        
        </div>
        <div className="searchBar">
            <Search/> 
        </div>
    </div>
)}
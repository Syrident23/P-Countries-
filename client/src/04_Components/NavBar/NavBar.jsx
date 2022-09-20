import React from "react";
import { Link } from "react-router-dom";

import Search from "../SearchBar/SearchBar";

export default function NavBar(){
return(
    <div>
        <h2>Countries</h2>
        <div className="navigation">
        
            <Link to={'/home'}>Home</Link>
            <Link to={'/activity'}>Create Activity</Link>
            <Link to={'/activities'}>List of Activities</Link>
        
        </div>
        <div className="searchBar">
            <Search/> 
        </div>
    </div>
)}
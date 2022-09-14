import React from "react";
import { Link } from "react-router-dom";

export default function NavBar(){
    <div>
        <h2>Countries</h2>
        <div className="navigation">
        
            <Link to={'/home'}/>
            <Link to={'/activity'}/>
            <Link to={'/activities'}/>
        
        </div>
        <div className="searchBar">
            
        </div>
    </div>
}
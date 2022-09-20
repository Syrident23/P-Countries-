import React from "react";
import Activity from "./Activity";
import {useSelector} from 'react-redux';
import NavBar from "../NavBar/NavBar";


export default function ActivitiesList(){
    const activities = useSelector((state) => state.activities)
    return(
        <div>
            <div>
            <NavBar/>
            </div>
            <div>
                {activities?.map((a)=>{
                    return(
                        <Activity
                        name = {a.name} 
                        dificulty = {a.dificulty}
                        season = {a.season}
                        duration = {a.duration}                    
                        />
                        )
                    })}
            </div>
        </div>
    )
}
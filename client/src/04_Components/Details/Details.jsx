import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {getDetail, restartDetail} from '../../03_Actions/actionsIndex'
import NavBar from '../NavBar/NavBar'

export default function Details(props){

    
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(restartDetail())
        dispatch(getDetail(props.match.params.id))
    },[dispatch,props.match.params.id])

    const countriesDetail = useSelector((state)=> state.detail)
    return(
        <div>
            <div>
                <NavBar/>
            </div>
            <div>{
                countriesDetail.length ? 
                <div>
                <img src={countriesDetail[0].flag} alt="image not found" height='60vh' width='60vh'/>
                <h2>{countriesDetail[0].name}</h2>
                <div>
                    <h3>ID: {countriesDetail[0].id}</h3>
                    <h3>Capital: {countriesDetail[0].capital}</h3>
                    <h3>Continent: {countriesDetail[0].continent}</h3>
                    <h3>Subregion: {countriesDetail[0].subregion}</h3>
                    <h3>Area: {countriesDetail[0].area}</h3>
                    <h3>Population: {countriesDetail[0].population}</h3>
                </div>
                <div className="activities">
                    {
                        countriesDetail[0].activities?.map(a => {
                            return(
                                <div>
                                    <Link className='linkDetail' to='/activities'>
                                        <h2>Actividad</h2>
                                    </Link>
                                    <div className='obj3Detail'>
                                        <h3>{a.name}</h3>
                                        <h3>Dificultad: {a.difficulty}</h3>
                                        <h3>Duracion: {a.duration}</h3>
                                        <h3>Temporada: {a.season}</h3>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                </div> : <div className="loading">
                    <p>loading...</p>
                </div>
            }</div>
        </div>
    )
}

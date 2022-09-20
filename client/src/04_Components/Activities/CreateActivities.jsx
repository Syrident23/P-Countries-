import React from "react";
import {useHistory} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { getActivities, postActivity } from "../../03_Actions/actionsIndex";
import NavBar from '../NavBar/NavBar'


function validate(input){
    let errors = {}
    if(!input.name){
        errors.name = 'Debe ingresar un nombre'
    }
    if (!input.dificulty) {
        errors.dificulty = 'Debe seleccionar una dificultad'
    }
    if (!input.season) {
        errors.season = 'Debe seleccionar una temporada'
    }
    if (!input.duration) {
        errors.duration = 'Debe ingresar una duración'
    }
    if(input.countryId === []){
        errors.duration = 'Debe seleccionar una ciudad'
    }
    return errors
}

export default function CreateActivities(){

    const dispatch = useDispatch()
    const history= useHistory()
    const countries = useSelector((state)=> state.allCountries)
    const [errors, setErrors] = useState()

    const [input, setInput] = useState({
        name: '',
        dificulty: '',
        season: '', 
        duration: '', 
        countryId: []        
    })

    useEffect(()=> {
        dispatch(getActivities())
    },[dispatch])

    function handleChange(e){
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })

    }

    function handleDelete(i){
        setInput({
            ...input,
            countryId: input.countryId.filter((e) => e !== i)
        })
    }

    function handleSelect(e){
        setInput({ 
            ...input, 
            countryId: [...input.countryId, e.target.value] 
        })
    }

    function handleSubmit(e){
        e.preventDefault()
        if( input.name === ''||
            input.duration === ''||
            input.dificulty === ''||
            input.season === ''||
            input.countryId.length === 0)return alert('complete all the fields');
        dispatch(postActivity(input))
        alert('Activity Successfully Created')
        setInput({
            name: '',
            dificulty: '',
            season: '', 
            duration: '', 
            countryId: []    
        })
        history.push('/home')
    }

    return(
        <div>
            <div>
                <NavBar/>
            </div>
            <h2>Create Activity</h2>
            <div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Name:</label>
                        <input 
                        placeholder="Enter a Name"
                        type="text" 
                        name = 'name'
                        value={input.name}
                        onChange={handleChange}
                        />
                        
                    </div>
                    <div>
                        <label>Duration:</label>
                        <input
                        placeholder="Enter a Duration"
                        className="inp"
                        type='text'
                        value= {input.duration}
                        name ='duration'
                        
                        onChange={(e)=>handleChange(e)}
                        />
                    </div>
                    <div>
                        <label>Dificulty:</label>
                        <input 
                        
                        className="inp"
                        type= 'range'
                        placeholder="1"
                        value={input.dificulty}
                        name= 'dificulty'
                        min= '1'
                        max= '5'
                        onChange={(e)=>handleChange(e)}
                        />
                        
                    </div>
                    <div>
                        <select 
                        placeholder="Select Season"
                        className="s"
                        name="season"
                        value={input.season}
                        onChange = {(e) => handleChange(e)}
                        >   
                            <option className="op">Select Season</option>
                            <option className="op" value="Spring">Spring</option>
                            <option className="op" value="Summer">Summer</option>
                            <option className="op" value="Autum">Autum</option>
                            <option className="op" value="Winter">Winter</option>

                        </select>
                        
                    </div>
                    
                    <div>
                        <select onChange={(e) => handleSelect(e)}>
                            <option>Countries</option>
                        {countries.map((c) => (
                                <option className="op" value={c.id}>{c.name}</option>    
                            ))}
                        </select>
                    </div>
                    <div className="textArea">
                        {input.countryId.map((country) => (
                            
                            <div className='countrieAndButton'>
                                <input className='btnDelete' type='button' value='X' onClick={() => handleDelete(country)}/>
                                <p className='pOfCountry'>{country}</p>
                            </div>
                        ))}
                </div>
                <div>
                    <button className='btnActivity' type="submit">Crear Actividad</button>
                </div>
                </form>
            </div>
        </div>
    )
}

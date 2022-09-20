import axios from 'axios';


export function getCountries(){
    return async function(dispatch){
        
        try {

            var json = await axios.get('http://localhost:3001/countries');

            return dispatch({ type: 'GET_COUNTRIES', payload: json.data });
            
        } catch (error) {
            console.log(error)
        }
    }
}


export function filterByContinent(payload){
    return{
        type: 'FILTER_CONTINENT',
        payload
    }
}


export function orderByName(payload){
    return{
        type: 'ORDER_BY_NAME',
        payload
    }
}

export function orderByPopulation(payload){
    return{
        type: 'ORDER_POPULATION',
        payload
    }
}



export function getActivities() {

    return async function(dispatch){
        try {

            var json = await axios.get('http://localhost:3001/activity');
            return dispatch({ 
                type: 'GET_ACTIVITY', 
                payload: json.data 
            });
            
        } catch (error) {
            alert('there are no activities')
            console.log(error)
        }
    }
    
}

export function postActivity(payload){
    return async function(dispatch) {
        await axios.post('http://localhost:3001/activity', payload)
        return dispatch({
            type: 'POST_ACTIVITY',
            
        })
    }
}


export function searchCountries(search){
    return async function(dispatch){
        try {
            var json = await axios('http://localhost:3001/countries?name=' + search)
            return dispatch({
                type: 'SEARCH_COUNTRIES',
                payload: json.data
            })

        } catch (error) {
            alert('El país no fue encontrado')
        }
    }
}

export function getDetail(id){
    return async function(dispatch){
        try {
            var json = await axios.get('http://localhost:3001/countries/' + id)
            return dispatch({
                type: 'COUNTRY_DETAIL',
                payload: json.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export function restartDetail() {
    return (dispatch) => {
        dispatch({ type: 'RESET' })
    }
}

export function filterByActivity(payload){
    return{
        type: 'FILTER_ACTIVITY',
        payload
    }
}
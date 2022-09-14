import axios from 'axios';


export function getCountries(){
    return async function(dispatch){
        
        try {

            var json = await axios.get('http://localhost3001/countries');

            return dispatch({ type: 'GET_CHARACTERS',payload: json.data });
            
        } catch (error) {
            console.log(error)
        }
    }
}


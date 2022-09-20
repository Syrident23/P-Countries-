
const initialState= {
    countries: [],
    allCountries: [],
    activities: [],
    detail: []
}

export default function rootReducer(state = initialState, action){
    switch (action.type) {
        
        case 'GET_COUNTRIES':
            
            return{
                ...state,
                countries: action.payload,
                allCountries: action.payload
            }
        case 'FILTER_CONTINENT':
            const filteredByContinent = state.allCountries
            const continentFiltered = action.payload === 'ALL' ? filteredByContinent : filteredByContinent.filter(c => c.continent === action.payload)
        
            return{
                ...state,
                countries: continentFiltered
            }

        case 'FILTER_ACTIVITY':

            const filtredByActivities = state.allCountries
            const countriesFiltered = filtredByActivities.filter((c) => { return c.activities.find((c) => { return c.name === action.payload; }); });
            
            
            if (action.payload === 'todos') {
                return { 

                    ...state, 
                    countries: filtredByActivities 
                
                }
            
            } else {
                return {

                    ...state,
                    countries: countriesFiltered
                
                }
            }
        case 'COUNTRY_DETAIL':
            return{
                ...state,
                detail: action.payload
            }

        case 'RESET':
            return{
                ...state,
                detail: []
            }
        case 'SEARCH_COUNTRIES':
            return{
                ...state,
                countries: action.payload
            }
        
        case 'ORDER_BY_NAME':
            
            let orderByName = action.payload === 'ASC' ? state.countries.sort(function (a,b){
                if(a.name < b.name){
                    return 1;
                }
                if(a.name > b.name){
                    return -1;
                }
                return 0;
            }): state.countries.sort(function (a,b){
                    if(a.name < b.name){
                        return -1;
                    }
                    if(a.name > b.name){
                        return 1;
                    }
                    return 0;
            })

            return{
                ...state,
                countries: orderByName
            }
        
        case 'ORDER_POPULATION':
            let orderByPopulation = action.payload === "HIGHER" ? state.countries.sort((a, b)=>{
                if(a.population < b.population) {
                    return 1;
                }
                if(a.population > b.population) {
                    return -1;
                }
                return 0;
            
            }): state.countries.sort((a, b) => {

                    if(a.population < b.population) {
                        return -1;
                    }
                    if(a.population > b.population) {
                        return 1;
                    }
                    return 0;
                })

            return {
                ...state,
                countries: orderByPopulation
            }
        
        case 'GET_ACTIVITY':
            return {
                ...state,
                activities: action.payload
            }    

        case 'POST_ACTIVITY':
            return{
                ...state,
            }


        default:
            
            return state;
    }
}



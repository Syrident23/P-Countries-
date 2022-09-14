
const initialState= {
    countries: [],
    allCountries: [],
    activities: [],
    detail: []
}

function rootReducer(state = initialState, action){
    switch (action.type) {
        case 'GET_COUNTRIES':
            
            return{
                ...state,
                countries: action.payload
            }
        default:
            break;
    }
}


export default rootReducer;
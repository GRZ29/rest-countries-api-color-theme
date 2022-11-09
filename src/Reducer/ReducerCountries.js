import FunctionsCountries from "../Functions/FunctionsCountries";

const ReducerCountries =  (state,action) => {
    switch (action.type) {
        case 'getAll':  {
            return {
                ...state,
                allData: action.payload,
                data: action.payload,
                loading: false,
            }
        }
        case 'searchName': {
            return {
                ...state,
                searchData: FunctionsCountries.FiltrarSearch(state.value)
            }
        }
        case 'searchDrop': {
            return {
              ...state,
              searchDrop: FunctionsCountries.FiltrarDrop(state.value)
            }
        }
        case 'loadingTrue':{
            return  {
                ...state,
                loading: true
            }
        }
        case 'loadingFalse':{
            console.log('entre')
            return  {
                ...state,
                loading: false
            }
        }
        default:{
            return null;
        }
    }
};

export default ReducerCountries;
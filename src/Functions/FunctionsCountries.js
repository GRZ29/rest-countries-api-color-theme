import api from '../API/api'

// let Validate = {
//     ValidateData(name,item){
//         window.localStorage.setItem(`${name}`,JSON.stringify(item))
//         return JSON.parse(window.localStorage.getItem(`${name}`));
//     }
// }

let FunctionsCountries = {
    async GetAllData(){
        return await api.countriesAll()
    },
    FiltrarSearch(state){
        return api.countriesByName(state)
        //return ''
    },
    FiltrarDrop(state){
        return api.countriesByCode(state)
        //return ''
    }
};

export default FunctionsCountries;
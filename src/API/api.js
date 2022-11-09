
let getCountries = {
    async countriesAll () {
        const countries = await fetch(`https://restcountries.com/v2/all`);
        
        return await countries.json();        
    },
    async countriesById (id) {
        const countries = await fetch(`https://restcountries.com/v2/alpha/${id}`);
        
        return  await countries.json();
    },
};

export default getCountries;
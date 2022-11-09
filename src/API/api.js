
let getCountries = {
    async countriesAll () {
        const countries = await fetch(`https://restcountries.com/v2/all`);
        //console.log(await countries.json())
        return await countries.json();        
        // let response = await countries.json();
        // return response;
    },
    async countriesByName (id) {
        const countries = await fetch(`https://restcountries.com/v2/alpha/${id}`);
        console.log(await countries.json())
        //return  await countries.json();
    },
    async countriesByCode (id) {
        const countries = await fetch(`https://restcountries.com/v2/alpha/${id}`);
        console.log(await countries.json())
        //return  await countries.json();
    },
};

export default getCountries;
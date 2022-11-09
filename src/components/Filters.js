import React, { useContext, useEffect } from 'react';
import { ContextCountries } from '../Context/Context';
import api from "../API/api";
import { useNavigate } from 'react-router-dom';

const Filters = () => {

    const navigate = useNavigate();

    const {state,dispatch} = useContext(ContextCountries)

    const test = () =>{
        console.log(state)
    }

    const testing = async () => {
        let countriesPromise = api.countriesAll();
    
        let countries = await countriesPromise;
    
        dispatch({ type: "getAll", payload: countries });
    };

    useEffect(()=>{
        testing();
    },[])

    return (
        <>
            asdasdsa:
            <button onClick={()=>test()}>console</button>
            <button onClick={()=>navigate("/api-countries/je")}>ssss</button>
        </>
    );
};

export default Filters;
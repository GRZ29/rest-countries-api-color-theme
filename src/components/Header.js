import React, { useContext } from 'react';
import { ContextCountries } from '../Context/Context';

const Header = () => {
    const {state,dispatch} = useContext(ContextCountries)

    const test = () =>{
        console.log(state)
    }

    return (
        <>
            <button onClick={()=>test()}>console</button>
        </>
    );
};

export default Header;
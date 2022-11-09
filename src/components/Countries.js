import React, {  useContext, useEffect, useReducer } from "react";
import api from "../API/api";
import { ContextCountries, ContextTheme } from "../Context/Context";
import Filters from "./Filters";
import { useNavigate } from "react-router-dom";

const Countries = () => {

  const navigate = useNavigate();

  const {state,dispatch} = useContext(ContextCountries)

  const {color} = useContext(ContextTheme)

  const {loading,data} = state;

  const Navigate = (code)=>{
    navigate(`/api-countries/${code}`)
  }

  const getData = async () => {
    let countriesPromise = api.countriesAll();

    let countries = await countriesPromise;

    dispatch({ type: "getAll", payload: countries });
    dispatch({ type: "setOptions"});
  };

  useEffect(() => {
    dispatch({ type: "loadingTrue" });
    getData();
  }, []);

  if (loading) {
    return <div>Loading</div>;
  }

  return (
    <div className="container">
      <Filters/>
      <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-4">
        {/* {data.map(item=>{console.log(item)})} */}
        {data?.map((item, index) => (
          <div key={index} className={`col h-100 mb-2`}>
            <div className={`card w-100 ${color.isDark? 'card-Dark' : 'card-White'}`} >
              <div className="m-0 p-0 w-100 " style={{height:175+'px'}}>
                <img src={item?.flag} className="card-img-top img-fluid" alt="..." style={{height:175+'px'}}/>
              </div>
              <div className="card-body">
                <div className="d-flex"><h5 className="card-title">{item?.name}</h5></div>
                <br/>
                <div className="d-flex"><h5 className="me-1">Populations: </h5><label>{item?.population}</label></div>
                <div className="d-flex"><h5 className="me-1">Region: </h5><label>{item?.region}</label></div>
                <div className="d-flex"><h5 className="me-1">Capital: </h5><label>{item?.capital}</label></div>
                <div className="d-flex"><button type="button" className="btn btn-primary my-2" onClick={()=>{Navigate(item.alpha3Code)}}>See more..</button></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Countries;

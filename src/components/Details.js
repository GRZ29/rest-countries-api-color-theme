import React, { useContext, useEffect } from "react";
import { useParams,useNavigate } from "react-router-dom";
import { ContextCountries } from "../Context/Context";
import api from "../API/api";

const Header = () => {
    
  const navigate = useNavigate();

  const { id } = useParams();

  const { state, dispatch } = useContext(ContextCountries);

  const { loading, dataSelected } = state;

  const getDataById = async (id) => {
    let countriePromise = api.countriesById(id);

    let countrie = await countriePromise;

    dispatch({ type: "getDetails", payload: countrie });
  };

  const Navigate = () => {
    navigate(`/api-countries`);
  };

  useEffect(() => {
    dispatch({ type: "loadingTrue" });

    getDataById(id);
  }, []);

  if (loading) {
    return <div>Loading</div>;
  }

  return (
    <div>
      <div className="container">
        <button
          type="button"
          className="btn btn-primary my-2"
          onClick={() => {
            Navigate();
          }}
        >
          Back
        </button>
      </div>
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-1 m-0 p-0">
          {dataSelected.map((item, index) => (
            <div key={index} className="col h-100 m-0 p-0">
              <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-2">
                <div className="col h-100 mb-2">
                  <img
                    src={item?.flag}
                    className="card-img-top img-fluid"
                    alt="..."
                    style={{ height: 175 + "px" }}
                  />
                </div>
                <div className="col h-100 mb-2">
                  <h5>{item?.name}</h5>
                  <div className="m-0 p-0 row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-2 m-0 p-0">
                    <div className="col m-0 p-0">
                      <div className="d-flex">
                        <h5 className="me-1">Native Name: </h5>
                        <label>{item?.nativeName}</label>
                      </div>
                      <div className="d-flex">
                        <h5 className="me-1">Population: </h5>
                        <label>{item?.population}</label>
                      </div>
                      <div className="d-flex">
                        <h5 className="me-1">Region: </h5>
                        <label>{item?.region}</label>
                      </div>
                      <div className="d-flex">
                        <h5 className="me-1">Sub Region: </h5>
                        <label>{item?.subregion}</label>
                      </div>
                      <div className="d-flex">
                        <h5 className="me-1">Capital: </h5>
                        <label>{item?.subregion}</label>
                      </div>
                    </div>
                    <div className="col m-0 p-0">
                      <div className="d-flex">
                        <h5 className="me-1">Top Level Domain: </h5>
                        <label>{item?.topLevelDomain}</label>
                      </div>
                      <div className="d-flex">
                        <h5 className="me-1">Currencies: </h5>
                        <label>
                          {item?.currencies?.map((a, i) => (
                            <label key={i}>{a.code}</label>
                          ))}
                        </label>
                      </div>
                      <div className="d-flex">
                        <h5 className="me-1">Region: </h5>
                        <label>{item?.region}</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;

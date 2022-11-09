import React, { useContext } from "react";
import { ContextCountries } from "../Context/Context";

const Filters = () => {
  const { state, dispatch } = useContext(ContextCountries);

  const { loading, options } = state;

  const handleChangeFilter = (e) => {
    const { value } = e.target;
    dispatch({ type: "searchName", payload: value });
  };

  const handleChangeDrop = (e) => {
    console.log(e)
    dispatch({ type: "searchDrop", payload: e });
  }

  if (loading) {
    <div>loading</div>;
  }

  return (
    <div className="mt-2 d-flex navbar">
      <div className="form-floating">
        <input
          type="email"
          className="form-control"
          id="floatingInput"
          placeholder="name@example.com"
          onChange={handleChangeFilter}
          style={{ width: 310 + "px" }}
        />
        <label htmlFor="floatingInput">Search</label>
      </div>
      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Filter by Region
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li><button className="dropdown-item" onClick={()=>handleChangeDrop(`All`)}>All</button></li>
          {options.map((item, index) => (
            <li key={index}>
              <button className="dropdown-item" onClick={()=>handleChangeDrop(`${item.region}`)}>{item.region}</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Filters;

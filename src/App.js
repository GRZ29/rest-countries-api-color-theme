import "./App.css";
import "./assets/sass/styles.scss";
import Countries from "./components/Countries";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./Routes/Layout";
//import Filters from "./components/Filters";
import { ContextCountries, ContextTheme } from "./Context/Context";
import ReducerCountries from "./Reducer/ReducerCountries";
import { initialStateCountries } from "./InitialState/InitialStateCountries";
import React, { useReducer } from "react";
import { initialStateTheme } from "./InitialState/InitialStateTheme";
import ReducerTheme from "./Reducer/ReducerTheme";
//import Header from "./components/Header";

function App() {
  const [state, dispatch] = useReducer(ReducerCountries, initialStateCountries);
  const [color, detonador] = useReducer(ReducerTheme, initialStateTheme);

  return (
    <ContextTheme.Provider value={{ color, detonador }}>
      <ContextCountries.Provider value={{ state, dispatch }}>
        <div className={`${color.isDark?'isDark':'isWhite'}`}>
          <BrowserRouter>
            <Routes>
              <Route
                path="/"
                element={<Navigate to="/api-countries" replace />}
              />
              <Route path="/api-countries" element={<Layout />}>
                <Route index element={<Countries />} />
                {/* <Route path="consumidor" element={<Filters />} />
            <Route path="je" element={<Header />} /> */}
                <Route path=":id" element={<Countries />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </div>
      </ContextCountries.Provider>
    </ContextTheme.Provider>
  );
}

export default App;

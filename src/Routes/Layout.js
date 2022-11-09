import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { ContextTheme } from "../Context/Context";

const Layout = () => {

  const {color, detonador} = useContext(ContextTheme)

  return (
    <div>
      <nav className="navbar">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Where in the world?
          </a>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              id="flexSwitchCheckChecked"
              onChange={()=>{detonador({ type: "isDark" });}}
              checked={color.isDark}
            />
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;

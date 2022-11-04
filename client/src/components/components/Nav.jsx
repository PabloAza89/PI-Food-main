import React from "react";
import Logo from "../img/logo.png";
import SearchBar from "./SearchBar.jsx";
import "./Nav.css";

import { Link } from "react-router-dom";

function Nav({ onSearch, lang }) {
  if (parseInt(lang) === 1) {
    return (
      <nav className="navbar">
        <Link id="background" to="/weather-app">
          <span id="logoAlign" className="navbar-brand">
            <img
              id="logo"
              src={Logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt=""
            />
          </span>
          <div className="weatherify">
          Weatherify
          </div>
        </Link>
        <Link className="aboutNav" to="/weather-app/about">
          <span >ACERCA</span>
        </Link>
        <SearchBar onSearch={onSearch} lang={lang}/>
      </nav>
    );
    
  } else {
    return (
      <div className="NavbarContainer">
        <nav   className="navbar">
          <Link id="background" to="/weather-app">
            <span id="logoAlign" className="navbar-brand">
              <img
                id="logo"
                src={Logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt=""
              />
            </span>
            <div className="weatherify">
            Weatherify
            </div>
          </Link> 
          <SearchBar onSearch={onSearch} lang={lang}/>
        </nav>        
        <Link className="aboutNav" to="/weather-app/about">
        <span >ABOUT</span>
        </Link>
    </div>
    );
    
  }
  
}

export default Nav;



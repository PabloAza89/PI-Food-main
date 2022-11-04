import React, { useState } from "react";
import "./SearchBar.css";

export default function SearchBar({onSearch, lang}) {
  //console.log("CC", lang)
  const [city, setCity] = useState("");

  if (lang === 1) {
    return (
      <form className="search" onSubmit={(e) => {
        e.preventDefault();
        onSearch(city);
      }}>
        <input className="findAdd"
          type="text"        
          placeholder="Buscar ciudad..."
          onFocus={e => setCity("")}
          value={city}
          onChange={e => setCity(e.target.value)}
        />
        <input className="findAdd"
        type="submit" value="AGREGAR CIUDAD!" />
      </form>
    );
  } else {
    return (
      <form className="search" onSubmit={(e) => {
        e.preventDefault();
        onSearch(city);
      }}>
        <input className="findAdd"
          type="text"          
          placeholder="Search city..."
          onFocus={e => setCity("")}
          value={city}
          onChange={e => setCity(e.target.value)}
        />
        <input className="findAdd"
        type="submit" value="ADD CITY!" />
      </form>
    );

  }

  
}
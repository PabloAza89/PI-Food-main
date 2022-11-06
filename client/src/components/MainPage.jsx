import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import './MainPage.css';
import Cards from "./Cards.jsx";
import City from "./City.jsx";


function MainPage() {
//  onSearch()
const [foods, setFoods] = useState([]);


useEffect(() => {
    fetch('http://localhost:3001/recipes')
    .then((r) => r.json())
    .then((res) => setFoods(res))  
}, []); // [] -> MEANS RUN ONCE !

  function onFilter(ciudadId) {
    let ciudad = foods.filter((c) => parseInt(ciudadId).toString() === ciudadId.toString() ? c.id === parseInt(ciudadId) : c.id === ciudadId);
    return ciudad[0]   
  }  
 
    
  return (
    <div className='mainPage'>   
      <Route exact path="/" render={ () => (<Cards foods={foods} />)} />
      <Route exact path="/:ciudadId" render={() => (<City onFilter={onFilter}  />)}/>
      
    </div>
  );
}

export default MainPage;

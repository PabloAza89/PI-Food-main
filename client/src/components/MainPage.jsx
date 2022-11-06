import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import './MainPage.css';
import Cards from "./Cards.jsx";
import Card from "./Card.jsx";

function MainPage() {
//  onSearch()
const [foods, setFoods] = useState([]);


//          setFoods((oldFoods) => oldFoods.filter((value, index, self) =>
//      index === self.findIndex((e) => (
//       e.id === value.id
//    )))); 

useEffect(() => {
    fetch('http://localhost:3001/recipes')
    .then((r) => r.json())
    .then((res) => setFoods(res))  
}, []); // [] -> MEANS RUN ONCE !

    // let filterRepeat = foods.filter((value, index, self) =>
    //   index === self.findIndex((e) => (
    //     e.id === value.id
    //   )))
 
    
  return (
    <div className='mainPage'>   
      <Route exact path="/" render={ () => (<Cards foods={foods} />)} />
      
    </div>
  );
}

export default MainPage;

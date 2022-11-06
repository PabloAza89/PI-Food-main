import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import '../styles/MainPage.css';
import Cards from "./Cards.jsx";
import Detail from "./Detail.jsx";
import Nav from "./Nav.jsx";


function MainPage() {
//  onSearch()
const [foods, setFoods] = useState([]);


useEffect(() => {
    fetch('http://localhost:3001/recipes')
    .then((r) => r.json())
    .then((res) => setFoods(res))  
}, []); // [] -> MEANS RUN ONCE !

  function onFilterID(foodId) {
    let food = foods.filter((c) => parseInt(foodId).toString() === foodId.toString() ? c.id === parseInt(foodId) : c.id === foodId);
    return food[0]   
  }  
  
 
  const [diets, setDiets] = useState([]);

  const [dietName, setdietName] = useState('');
  

  useEffect(() => {
    fetch('http://localhost:3001/diets')
    .then((r) => r.json())
    .then((res) => setDiets(res))  
}, []); // [] -> MEANS RUN ONCE !
  console.log('FRONT', dietName)

  const handleDietNameChange = (dietName) => {
    setdietName(dietName);
}
  
  
  console.log('FRONT', foods)

   function onDietFilter() {
    let byTypeDiet = foods.filter(e => e.diets.includes(dietName));
    console.log('PROBANDO', byTypeDiet)
    return byTypeDiet
  } 


  onDietFilter()
  
  return (
    <div className='mainPage'>   
      <Route exact path="/" render={ () => (<Nav diets={diets}  dietName={dietName} handleDietNameChange={handleDietNameChange}/>)} />
      <Route exact path="/" render={ () => (<Cards foods={foods} />)} />
      <Route exact path="/:foodId" render={() => (<Detail onFilterID={onFilterID}  onDietFilter={onDietFilter}/>)}/>
         
      
    </div>
  );
}

export default MainPage;

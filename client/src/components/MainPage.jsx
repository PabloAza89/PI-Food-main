import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import '../styles/MainPage.css';
import Cards from "./Cards.jsx";
import Detail from "./Detail.jsx";
import Nav from "./Nav.jsx";


function MainPage() {

const [foods, setFoods] = useState([]); // ALL FOODS
const [diets, setDiets] = useState([]); // ALL DIETS
const [dietName, setDietName] = useState(''); // DIET NAME SELECTED
const [healthLevel , setHealthLevel] = useState(''); // HEALTH LEVEL SELECTED

useEffect(() => {
    fetch('http://localhost:3001/recipes')
    .then((r) => r.json())
    .then((res) => setFoods(res))  
}, []); // [] -> MEANS RUN ONCE !

useEffect(() => {
  fetch('http://localhost:3001/diets')
  .then((r) => r.json())
  .then((res) => setDiets(res))  
}, []); // [] -> MEANS RUN ONCE !

function onFilterID(foodId) {
  let food = foods.filter((c) => parseInt(foodId).toString() === foodId.toString() ? c.id === parseInt(foodId) : c.id === foodId);
  return food[0]   
}  

const handleDietNameChange = (dietName) => {
  setDietName(dietName);
}

const handleHealthLevelChange = (healthLevel) => {
  setHealthLevel(healthLevel);
}
  
function onDietFilter() {
  let byTypeDiet = foods.filter(e => e.diets.includes(dietName));
  return byTypeDiet
} 

function onHealthFilter() {
  let byHealth
  if (healthLevel === "Less Healthy") byHealth = foods.sort((a,b) => a.healthScore - b.healthScore);
  if (healthLevel === "More Healthy") byHealth = foods.sort((a,b) => b.healthScore - a.healthScore);
  return byHealth
} 
onHealthFilter()
console.log("TEST",onHealthFilter())
console.log("DIET NAME",healthLevel)

  return (
    <div className='mainPage'>   
      <Route exact path="/" render={ () => (<Nav diets={diets}  handleDietNameChange={handleDietNameChange}  handleHealthLevelChange={handleHealthLevelChange}/>)} />
      <Route exact path="/" render={ () => (<Cards foods={ foods.length === onDietFilter().length ? foods : onDietFilter() } />)} />
      <Route exact path="/:foodId" render={() => (<Detail onFilterID={onFilterID}  onDietFilter={onDietFilter}/>)}/>
         
      
    </div>
  );
}

export default MainPage;

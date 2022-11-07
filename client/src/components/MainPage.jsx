import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import '../styles/MainPage.css';
import Cards from "./Cards.jsx";
import Detail from "./Detail.jsx";
import Nav from "./Nav.jsx";
import Form from "./Form.jsx";


function MainPage() {

const [foods, setFoods] = useState([]); // ALL FOODS

const [allFoods, setAllFoods] = useState(""); // ALL FOODS FOODS
const [diets, setDiets] = useState([]); // ALL DIETS
const [dietName, setDietName] = useState(''); // DIET NAME SELECTED
const [healthLevel , setHealthLevel] = useState(''); // HEALTH LEVEL SELECTED
const [sortName , setSortName] = useState(''); // SORT NAME SELECTED

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

const handleSortNameChange = (sortName) => {
  setSortName(sortName);
}
  
function onDietFilter() {
  return foods.filter(e => e.diets.includes(dietName));
} 

function onHealthFilter() {
  if (healthLevel === "Less Healthy") return foods.sort((a,b) => a.healthScore - b.healthScore);
  if (healthLevel === "More Healthy") return foods.sort((a,b) => b.healthScore - a.healthScore);
} 

function onSortNameFilter() {
  if (sortName === "A-Z") return foods.sort((a, b) => a.title.localeCompare(b.title))
  if (sortName === "Z-A") return foods.sort((a, b) => b.title.localeCompare(a.title))
  
} 

 onDietFilter()
 onHealthFilter()
 onSortNameFilter()
// {<Route exact path="/" render={ () => (<Nav diets={diets}  
//       handleDietNameChange={handleDietNameChange}  handleHealthLevelChange={handleHealthLevelChange} handleSortNameChange={handleSortNameChange}
//       onDietFilter={onDietFilter} onHealthFilter={onHealthFilter} onSortNameFilter={onSortNameFilter}
//       />)} />}

  return (
    <div className='mainPage'>   
      {<Route exact path="/" render={ () => (<Nav diets={diets} foods={foods} handleDietNameChange={handleDietNameChange}  handleHealthLevelChange={handleHealthLevelChange} handleSortNameChange={handleSortNameChange} />)} />}
      {/* <Route exact path="/" render={ () => (<Cards foods={ foods.length === onDietFilter().length ? foods : onDietFilter() } />)} /> */}
      <Route exact path="/" render={ () => (<Cards foods={foods}   />)} />
      
      
      <Route exact path="/:foodId" render={() => (<Detail onFilterID={onFilterID} />)}/>
      <Route exact path="/create" render={() => (<Form/>)}/>
         
      
    </div>
  );
}

export default MainPage;

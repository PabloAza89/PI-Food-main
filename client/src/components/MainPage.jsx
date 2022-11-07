import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import '../styles/MainPage.css';
import Cards from "./Cards.jsx";
import Detail from "./Detail.jsx";
import Nav from "./Nav.jsx";
import Form from "./Form.jsx";


function MainPage() {

const [foods, setFoods] = useState([]); // ALL FOODS
const [diets, setDiets] = useState([]); // ALL MAIN DIETS

const [dietName, setDietName] = useState({ // DIET NAME SELECTED
  name: "",
  selected: false
}); 

const [healthLevel , setHealthLevel] = useState({ // HEALTH LEVEL SELECTED
  name: "",
  selected: false
}); 

const [sortName , setSortName] = useState({ // SORT NAME SELECTED
  name: "",
  selected: false
}); 

console.log(" *** FRONT DIET NAME", dietName)
console.log("FRONT HEALTH LEVEL", healthLevel)
console.log("FRONT SORT NAME", sortName)
console.log("FOODS", foods)
console.log(" *** DIETS", diets)


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
  setSortName({name: "", selected: false});
  setHealthLevel({name: "", selected: false});
  setDietName({name: dietName, selected: true});
}

const handleHealthLevelChange = (healthLevel) => {
  setSortName({name: "", selected: false});
  setHealthLevel({name: healthLevel, selected: true});
}

const handleSortNameChange = (sortName) => {
  setHealthLevel({name: "", selected: false});
  setSortName({name: sortName, selected: true});
}
  
function onDietFilter() {
  //return foods.filter(e => e.diets.includes(dietName));
  return foods.filter(e => e.diets.includes(dietName))
  
}

function onHealthFilter() {
  if (healthLevel.name === "Less Healthy" && healthLevel.selected === true) return foods.sort((a,b) => a.healthScore - b.healthScore);
  if (healthLevel.name === "More Healthy" && healthLevel.selected === true) return foods.sort((a,b) => b.healthScore - a.healthScore);
}

function onSortNameFilter() {
  if (sortName.name === "A-Z" && sortName.selected === true) return foods.sort((a, b) => a.title.localeCompare(b.title))
  if (sortName.name === "Z-A" && sortName.selected === true) return foods.sort((a, b) => b.title.localeCompare(a.title))
}


 onHealthFilter()
 onSortNameFilter()

  return (
    <div className='mainPage'>   
      {<Route exact path="/" render={ () => (<Nav diets={diets} foods={foods} handleDietNameChange={handleDietNameChange}  handleHealthLevelChange={handleHealthLevelChange} handleSortNameChange={handleSortNameChange} />)} />}
      
      <Route exact path="/" render={ () => (<Cards foods={ dietName.name === "" ? foods : onDietFilter() } />)} />
      {/* <Route exact path="/" render={ () => (<Cards foods={foods}   />)} /> */}
      
      
      <Route exact path="/:foodId" render={() => (<Detail onFilterID={onFilterID} />)}/>
      <Route exact path="/create" render={() => (<Form/>)}/>
         
      
    </div>
  );
}

export default MainPage;

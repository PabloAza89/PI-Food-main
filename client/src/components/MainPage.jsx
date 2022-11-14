import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import { /* useSelector */ /* , useDispatch */ } from 'react-redux';
import { /* left , right , allIndexes */ } from '../actions';
import '../styles/MainPage.css';
import Cards from "./Cards.jsx";
import Detail from "./Detail.jsx";
import Paginate from "./Paginate.jsx";
import Nav from "./Nav.jsx";
import Form from "./Form.jsx";

function MainPage() {

  

//const dispatch = useDispatch()

const [foods, setFoods] = useState([]); // ALL MAIN FOODS
const [diets, setDiets] = useState([]); // ALL MAIN DIETS

useEffect(() => {
  fetch('http://localhost:3001/recipes')
  .then((r) => r.json())
  .then((res) => setFoods(res))  
}, []); // [] -> MEANS RUN ONCE !

useEffect(() => {
fetch('http://localhost:3001/diets')
.then(r => r.json())
.then(res => setDiets(res))  
}, []); // [] -> MEANS RUN ONCE !

let dietsAndTitleFilter = [] // FIRST INSTANCE ARRAY TO FILTER: 1º DIETS --> 2º TITLE
let toShow = [] // ARRAY SORTED BY HEALTH LEVEL OR A-Z TO SHOW

const [dietName, setDietName] = useState({ 
  name: "all", // FIRST INSTANCE DEFAULT VALUE
});

const [titleMatch, setTitleMatch] = useState({ 
  name: "",
}); 

const [healthLevel , setHealthLevel] = useState({ // HEALTH LEVEL SELECTED
  name: "More Healthy", // FIRST INSTANCE DEFAULT VALUE
  //name: "More Healthy", // FIRST INSTANCE DEFAULT VALUE
  selected: false // FIRST INSTANCE DEFAULT VALUE
}); 

const [sortName , setSortName] = useState({ // SORT NAME SELECTED
  name: "A-Z",
  selected: false
});

function onFilterID(foodId) {
  let food = foods.filter((c) => parseInt(foodId).toString() === foodId.toString() ? c.id === parseInt(foodId) : c.id === foodId);
  return food[0]   
}  


const handleDietNameChange = (dietName) => { 
  setDietName({name: dietName}); 
}

const handleTitleMatchChange = (titleMatch) => {
  setTitleMatch({name: titleMatch}); 
}

const handleHealthLevelChange = (healthLevel) => {
  setHealthLevel({name: healthLevel, selected: true}); // CORRECTO
  setSortName({name: "", selected: false}); // CORRECTO
}

const handleSortNameChange = (sortName) => {
  setHealthLevel({name: "", selected: false}); // CORRECTO
  setSortName({name: sortName, selected: true}); // CORRECTO
}

function onDietAndTitleFilter() {
  if (dietName.name === "all") {
    if (titleMatch.name === "") {
      dietsAndTitleFilter =  foods
    } else {   
      let qq = foods.filter(e => e.title.toLowerCase().includes(titleMatch.name.toLowerCase()))
      dietsAndTitleFilter = qq
    }
  } else {
    if (titleMatch.name === "") {
      let qq = foods.filter(e => e.diets.includes(dietName.name))
      dietsAndTitleFilter = qq
    } else {
      let qq = foods.filter(e => e.diets.includes(dietName.name))
      let ww = qq.filter(e => e.title.toLowerCase().includes(titleMatch.name.toLowerCase()))
      dietsAndTitleFilter = ww
    }
  }
}




function onHealthLevelFilter() {
  if (healthLevel.name === "-- select an option --" && healthLevel.selected === false) { // FIRST INSTANCE
    let qq = dietsAndTitleFilter.sort((a,b) => b.healthScore - a.healthScore);
    toShow = qq
  }
  if (healthLevel.name === "More Healthy" && healthLevel.selected === false) { // FIRST INSTANCE
    let qq = dietsAndTitleFilter.sort((a,b) => b.healthScore - a.healthScore);
    toShow = qq
  }
    if (healthLevel.name === "More Healthy" && healthLevel.selected === true) { // FIRST INSTANCE
      let qq = dietsAndTitleFilter.sort((a,b) => b.healthScore - a.healthScore);
      toShow = qq
    }
    if (healthLevel.name === "Less Healthy" && healthLevel.selected === true) {
      let qq = dietsAndTitleFilter.sort((a,b) => a.healthScore - b.healthScore);
      toShow = qq
    }
}



function onSortNameFilter() {
  if (sortName.name === "A-Z" && sortName.selected === true) {
    let qq = dietsAndTitleFilter.sort((a, b) => a.title.localeCompare(b.title))
    toShow = qq
  }

  if (sortName.name === "Z-A" && sortName.selected === true) {
    let qq = dietsAndTitleFilter.sort((a, b) => b.title.localeCompare(a.title))
    toShow = qq
  }
 }











Promise.all([onDietAndTitleFilter()])
.then(onHealthLevelFilter())
.then(onSortNameFilter())
// .then(AllIndexesButtons())
// .then(AllIndexesButtons())
// .then(AllIndexesButtons())




//console.log("INDEXSHOOSEN", useSelector(state => state.indexChoosen))
//console.log("TEST", useSelector(state => state.allIndexes))

//console.log("FONT INDEX CHOOSEN", useSelector(state => state.indexChoosen))
//console.log("FONT INDEX CHOOSEN", useSelector(state => state.indexChoosen))
//console.log("*** TOSHOW:", toShow) // CONSOLE LOG FINAL

  return (
    <div className='mainPage'>   
      {<Route exact path="/" render={ () => (<Nav diets={diets} foods={foods} 
        handleDietNameChange={handleDietNameChange} handleHealthLevelChange={handleHealthLevelChange} 
        handleSortNameChange={handleSortNameChange} handleTitleMatchChange={handleTitleMatchChange}  />)}
      />} 
      <Route exact path="/" render={ () => (<Paginate   />)} /> 
      <Route exact path="/" render={ () => (<Cards toShow={toShow}  />) } /> 
      
      <Route exact path="/:foodId" render={() => (<Detail onFilterID={onFilterID} />)}/>
      <Route exact path="/create" render={() => (<Form/>)}/>
         
      
    </div>
  );
}

export default MainPage;

import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import '../styles/MainPage.css';
import Cards from "./Cards.jsx";
import Detail from "./Detail.jsx";
import Nav from "./Nav.jsx";
import Form from "./Form.jsx";


function MainPage() {

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

let toShow = [] // SET ARRAY TO SHOW
//let [toShow, setToShow] = useState([]); // SET ARRAY TO SHOW

const [titleMatch, setTitleMatch] = useState({ // TITLE MATCH SELECTED
  name: "",
  //selected: false // NO INTERESARIA SU USO, LO QUE IMPORTA ES EL VALOR DE NAME
}); 

const [dietName, setDietName] = useState({ // DIET NAME SELECTED
  name: "all",
  selected: false
});

const [healthLevel , setHealthLevel] = useState({ // HEALTH LEVEL SELECTED
  name: "More Healthy",
  selected: true
}); 

const [sortName , setSortName] = useState({ // SORT NAME SELECTED
  name: "A-Z",
  selected: false
}); 





function onFilterID(foodId) {
  let food = foods.filter((c) => parseInt(foodId).toString() === foodId.toString() ? c.id === parseInt(foodId) : c.id === foodId);
  return food[0]   
}  

console.log("TITLEMATCH IS EMPTY:", titleMatch.name === "", "|| VALUE:", titleMatch.name) // LO PRIMERO A CORROBORAR


const handleTitleMatchChange = (titleMatch) => {
  setTitleMatch({name: titleMatch}); // VE
}

const handleDietNameChange = (dietName) => {
  // setHealthLevel({name: healthLevel.name, selected: true}); // CORRECTO
  // setSortName({name: "", selected: false}); // CORRECTO
  console.log("BB", dietName)
  setDietName({name: dietName, selected: true}); // CORRECTO
  
}

const handleHealthLevelChange = (healthLevel) => {
  setHealthLevel({name: healthLevel, selected: true}); // CORRECTO
  setSortName({name: "", selected: false}); // CORRECTO
  
}

const handleSortNameChange = (sortName) => {
  setHealthLevel({name: "", selected: false}); // CORRECTO
  setSortName({name: sortName, selected: true}); // CORRECTO
}


//console.log("TITLE", titleMatch.name === "")
//console.log("*** FRONT OUTER TO SHOW", toShow)
function onTitleMatch() {
/*   console.log("*** FRONT TITLEMATCH", titleMatch)
  console.log("FRONT FOODS", foods)
  console.log("FRONT TOSHOW", toShow) */
  if (titleMatch.name === "") {
    let qq = foods
    toShow = qq
    return toShow
  }
  if (titleMatch.name !== "") {
    let qq = foods.filter(e => e.title.toLowerCase().includes(titleMatch.name.toLowerCase()))
    toShow = qq
    return toShow
  }
}
//console.log("TITLE MATCH", titleMatch)

//qq.filter(e => e.title.toLowerCase().includes("D".toLowerCase()))
  
//console.log("DIETS NAME", dietName)
function onDietFilter() {
  // if (dietName.name === "") {
  //   let qq = foods
  //   toShow = qq
  //   //return toShow
  // }
  if (dietName.name === "all") {
    let qq = foods
    toShow = qq
    return toShow
  }
  if (dietName.name !== "") {
    let qq = foods.filter(e => e.diets.includes(dietName.name))
    toShow = qq
    return toShow
  }
  
  //return toShow
}


// console.log("*** healthLevel.name", healthLevel.name)
// console.log("healthLevel.selected", healthLevel.selected)
// console.log("sortName.name", sortName.name)
// console.log("*** sortName.selected", sortName.selected)

function onHealthFilter() {
      if (healthLevel.name === "" && healthLevel.selected === false) { // FIRST INSTANCE HELPER
      let qq = foods.sort((a,b) => b.healthScore - a.healthScore);
      qq = foods
      return toShow = qq
      
    }
    
    if (healthLevel.name === "More Healthy" && healthLevel.selected === false) { // FIRST INSTANCE HELPER
      let qq = foods.sort((a,b) => b.healthScore - a.healthScore);
      qq = foods
      return toShow = qq

    }

    if (healthLevel.name === "Less Healthy" && healthLevel.selected === true) {
      // let qq =  foods.sort((a,b) => a.healthScore - b.healthScore);
      // qq = foods
      // return toShow = qq
      let qq =  toShow.sort((a,b) => a.healthScore - b.healthScore);
      return qq
    }
    if (healthLevel.name === "More Healthy" && healthLevel.selected === true) {
      // let qq = foods.sort((a,b) => b.healthScore - a.healthScore);
      // qq = foods
      // return toShow = qq
      let qq = toShow.sort((a,b) => b.healthScore - a.healthScore);
      return qq
    }  
 

}

// console.log("sortName", sortName)
// console.log("sortName.name", sortName.name === "")

function onSortNameFilter() {
  if ((sortName.name === "" || sortName.name === "A-Z") && sortName.selected === false) {
    let qq = foods.sort((a, b) => a.title.localeCompare(b.title))
    qq = foods
    return toShow = qq
  }
  if (sortName.name === "A-Z" && sortName.selected === true) {
    let qq = foods.sort((a, b) => a.title.localeCompare(b.title))
    qq = foods
    return toShow = qq
  }
  if (sortName.name === "Z-A" && sortName.selected === true) {
    let qq = foods.sort((a, b) => b.title.localeCompare(a.title))
    qq = foods
    return toShow = qq
  }
}

onTitleMatch() // LO PRIMERO QUE SE EJECUTA
onDietFilter()
onHealthFilter()
onSortNameFilter()



  return (
    <div className='mainPage'>   
      {<Route exact path="/" render={ () => (<Nav diets={diets} foods={foods} 
        handleDietNameChange={handleDietNameChange} handleHealthLevelChange={handleHealthLevelChange} 
        handleSortNameChange={handleSortNameChange} handleTitleMatchChange={handleTitleMatchChange}  />)}
      />}
      
      {/* <Route exact path="/" render={ () => (<Cards foods={ dietName.name !== "" ? foods : onDietFilter() } />)} /> */}
      <Route exact path="/" render={ () => (<Cards toShow={toShow}   />)} />
      {/* <Route exact path="/" render={ () => (<Cards foods={foods}   />)} /> */}
      {/* {console.log("FINAL", toShow)} */}
      
      <Route exact path="/:foodId" render={() => (<Detail onFilterID={onFilterID} />)}/>
      <Route exact path="/create" render={() => (<Form/>)}/>
         
      
    </div>
  );
}

export default MainPage;

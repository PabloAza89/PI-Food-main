import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import '../styles/MainPage.css';
import Cards from "./Cards.jsx";
import Detail from "./Detail.jsx";
import Paginate from "./Paginate.jsx";
import Nav from "./Nav.jsx";
import Form from "./Form.jsx";

function MainPage() {

  const [isLoading, setIsLoading] = useState({
    main: true,
    refresh: false
  });

 

  function GetAfterCreated () { 
    setIsLoading(isLoading, isLoading.refresh = true)
    console.log("DEL FORM", isLoading)
    if (isLoading) {
      //useEffect(() => {      
          fetch('http://localhost:3001/recipes')
          .then((r) => r.json())
          .then((res) => setFoods(res))
          fetch('http://localhost:3001/diets')
          .then(r => r.json())
          .then(res => setDiets(res))  
          setIsLoading(isLoading, isLoading.main = false)
          
     // }, []);
    }
  }

  
  

//   const [helperToUpdate, setHelperToUpdate] = useState([])
//  function GetAfterCreated () {
//     useEffect(() => {
//       fetch('http://localhost:3001/diets')
//       .then(r => r.json())
//       .then(res => setHelperToUpdate(res))  
//       }, []) 
//       .then(console.log("OK"));
//   }

  const [foods, setFoods] = useState([]); // ALL MAIN FOODS
  const [diets, setDiets] = useState([]); // ALL MAIN DIETS

  // useEffect(() => {
  //   if(isLoading) {
  //     fetch('http://localhost:3001/recipes')
  //     .then((r) => r.json())
  //     .then((res) => setFoods(res))
  //     //setIsLoading(false);  
  //   }  
  // }, []); // [] -> MEANS RUN ONCE !

  // useEffect(() => {
  //   if(isLoading) {
  //     fetch('http://localhost:3001/diets')
  //     .then(r => r.json())
  //     .then(res => setDiets(res))  
  //     setIsLoading(false);
  //   }
  // }, []); // [] -> MEANS RUN ONCE !

  // useEffect(() => {
  //   if(isLoading) {
  //     fetch('http://localhost:3001/recipes')
  //     .then((r) => r.json())
  //     .then((res) => setFoods(res))
  //     fetch('http://localhost:3001/diets')
  //     .then(r => r.json())
  //     .then(res => setDiets(res))  
  //     setIsLoading(false);
  //   }  
  // }, []); // [] -> MEANS RUN ONCE !

  //function CheckIfIsLoading() {
    useEffect(() => {
      if(isLoading) {
        fetch('http://localhost:3001/recipes')
        .then((r) => r.json())
        .then((res) => setFoods(res))
        fetch('http://localhost:3001/diets')
        .then(r => r.json())
        .then(res => setDiets(res))  
        setIsLoading(isLoading, isLoading.main = false)
      }  
    }, []); // [] -> MEANS RUN ONCE !
  //}

  

  // useEffect(() => {
  //   if(isLoading) {
  //     fetch('http://localhost:3001/diets')
  //     .then(r => r.json())
  //     .then(res => setDiets(res))  
  //     setIsLoading(false);
  //   }
  // }, []); // [] -> MEANS RUN ONCE !

//  function GetAfterCreated () { 
//     //e.preventDefault()
//     const [helperToUpdate, setHelperToUpdate] = useState(() => {
//       fetch('http://localhost:3001/diets')
//       .then((r) => r.json())
//       .then((res) => setHelperToUpdate(res))  
//     });
//     //return helperToUpdate
//     console.log(helperToUpdate)
//   }  

  let dietsAndTitleFilter = [] // FIRST INSTANCE ARRAY TO FILTER: 1º DIETS --> 2º TITLE
  let toShow = [] // ARRAY SORTED BY HEALTH LEVEL OR A-Z TO SHOW

  const [dietName, setDietName] = useState({ 
    name: "All Diets", // FIRST INSTANCE DEFAULT VALUE
  });

  const [titleMatch, setTitleMatch] = useState({ 
    name: "",
  }); 

  const [healthLevel , setHealthLevel] = useState({ // HEALTH LEVEL SELECTED
    name: "More Healthy", // FIRST INSTANCE DEFAULT VALUE
    selected: false // 
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
    setHealthLevel({name: healthLevel, selected: true});
    setSortName({name: "", selected: false}); 
  }

  const handleSortNameChange = (sortName) => {
    setHealthLevel({name: "", selected: false}); 
    setSortName({name: sortName, selected: true}); 
  }

  function onDietAndTitleFilter() {
    if (dietName.name === "All Diets") {
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
    if (healthLevel.name === "-- select an option --" && healthLevel.selected === false) {
      let qq = dietsAndTitleFilter.sort((a,b) => b.healthScore - a.healthScore);
      toShow = qq
    }
    if (healthLevel.name === "More Healthy" && healthLevel.selected === false) { 
      let qq = dietsAndTitleFilter.sort((a,b) => b.healthScore - a.healthScore);
      toShow = qq
    }
      if (healthLevel.name === "More Healthy" && healthLevel.selected === true) {
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

  // function qq () {
  //   Promise.all([CheckIfIsLoading()])
  // //.then(CheckIfIsLoading())
  // .then(onDietAndTitleFilter())
  // .then(onHealthLevelFilter())
  // .then(onSortNameFilter())  

  // }
  // qq()

  // Promise.all([CheckIfIsLoading()])
  // //.then(CheckIfIsLoading())
  // .then(onDietAndTitleFilter())
  // .then(onHealthLevelFilter())
  // .then(onSortNameFilter())  

  Promise.all([onDietAndTitleFilter()])
  .then(onHealthLevelFilter())
  .then(onSortNameFilter())
  
  
  console.log("IS LOADING", isLoading)

  return !isLoading.main ? (
    <div className='mainPage'>   
      {<Route exact path="/" render={ () => (<Nav diets={diets} foods={foods} 
        handleDietNameChange={handleDietNameChange} handleHealthLevelChange={handleHealthLevelChange} 
        handleSortNameChange={handleSortNameChange} handleTitleMatchChange={handleTitleMatchChange}  />)}
      />} 
      <Route exact path="/" render={ () => (<Paginate />)} /> 
      <Route exact path="/" render={ () => (<Cards toShow={toShow}  />) } />       
      <Route exact path="/:foodId" render={() => (<Detail onFilterID={onFilterID} />)}/>
      <Route exact path="/create" render={() => (<Form /* onClick={setIsLoading(false)} */ GetAfterCreated={GetAfterCreated} />)}/>
    </div>
  ) : (<div>Loading..</div>);
}

export default MainPage;

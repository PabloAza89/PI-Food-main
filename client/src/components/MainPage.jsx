import React, { useState } from "react";
import { Route } from "react-router-dom";
import './MainPage.css';
import Cards from "./Cards.jsx";
import Card from "./Card.jsx";
//import Card from "./Card.jsx";

function MainPage() {

  const [foods, setFoods] = useState([]);

  

    /* function onClose(id) {
        setFoods((oldFoods) => oldFoods.filter((c) => c.id !== id));
    } */
 
    function onSearch() {
        //Llamado a la API del clima
        fetch('http://localhost:3001/recipes'/* , {
          method: 'GET'
        } */)
            .then((r) => r.json())
            .then((res) => {
              res.forEach(e => foods.push(e))
              
              /*   //if (res !== undefined) {
                  const food = res.map(e => {
                      return {
                        key: e.id,
                        id: e.id,
                        title: e.title,
                        summary: e.summary,
                        healthScore: e.healthScore,
                        analyzedInstructions: e.analyzedInstructions,
                        diets: e.diets
                      }
                   })
                    setFoods((oldFoods) => [...oldFoods, food]);
                //} else {
                //    alert("Food not found!");
               // } */
              }
              );
    }


  return (
    <div className='mainPage'>
      {console.log('MAIN PAGE', foods)}
      {onSearch()}
      <Cards foods={foods} />
      
      {/* <Route path="/" render={() => (<Cards foods={foods} />)} /> */}
      {/* <Route path="/" render={() => (<Cards />)} /> */}
      
      <Route path="/" render={() => (<Card foods={foods} />)} />
      {/* <Card onSearch={onSearch}/> */}
    </div>
  );
}

export default MainPage;

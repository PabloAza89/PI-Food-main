import React, { useState } from "react";
import { Route } from "react-router-dom";
import './MainPage.css';
import Cards from "./Cards.jsx";
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
              foods.push(res)
              
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
      
      <Route path="/recipes" render={() => (<Cards foods={foods} />)} />
      {/* <Card onSearch={onSearch}/> */}
    </div>
  );
}

export default MainPage;

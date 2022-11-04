import React, { useState } from "react";
import { Route } from "react-router-dom";
import './MainPage.css';
import Cards from "./Cards.jsx";

function MainPage() {

  const [foods, setFoods] = useState([]);

    /* function onClose(id) {
        setFoods((oldFoods) => oldFoods.filter((c) => c.id !== id));
    } */

    function onSearch(foods) {
        //Llamado a la API del clima
        fetch(
            `http://localhost:3001/recipes`
        )
            .then((r) => r.json())
            .then((res) => {
                if (res[0] !== undefined) {
                    const food = {
                        key: res.id,
                        id: res.id,
                        title: res.title,
                        summary: res.summary,
                        healthScore: res.healthScore,
                        analyzedInstructions: res.analyzedInstructions,
                        diets: res.diets,
                        /* database: res.main.temp, // OPTION
                        dishTypes: res.main.temp, // OPTION
                        image: res.main.temp, // OPTION */
                        
                    };
                    setFoods((oldFoods) => [...oldFoods, food]);
                } else {
                    alert("Food not found!");
                }
            });
    }


  return (
    <div className='mainPage'>
      <Route exact path="/weather-app" render={() => (<Cards foods={foods}  />)} />
    </div>
  );
}

export default MainPage;

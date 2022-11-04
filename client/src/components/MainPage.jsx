import React, { useState } from "react";
import { Route } from "react-router-dom";
import './MainPage.css';
import Cards from "./Cards.jsx";

function MainPage() {

  const [foods, setFoods] = useState([]);

   /*  function onClose(id) {
        setFoods((oldFoods) => oldFoods.filter((c) => c.id !== id));
    } */

    function onSearch(food) {
        //Llamado a la API del clima
        fetch(
            `http://localhost:3001/recipes`
        )
            .then((r) => r.json())
            .then((recurso) => {
                if (recurso !== undefined) {
                    const food = {
                        id: Math.round(recurso.main.temp_min),
                        title: Math.round(recurso.main.temp_max),
                        summary: recurso.weather[0].icon,
                        healthScore: recurso.id,
                        analyzedInstructions: recurso.wind.speed,
                        diets: recurso.name,
                        database: recurso.main.temp, // OPTION
                        dishTypes: recurso.main.temp, // OPTION
                        image: recurso.main.temp, // OPTION
                        
                    };
                    setFoods((oldFoods) => [...oldFoods, food]);
                } else {
                   /*  function right(){document.getElementsByClassName("search")[0].style.width=(320+"px")}
                    function left(){document.getElementsByClassName("search")[0].style.width=(340+"px")}
                    function center(){document.getElementsByClassName("search")[0].style.width=(330+"px")}
                    center()
                    setTimeout(center, 200)
                    left()
                    setTimeout(left, 160)
                    center()                  
                    setTimeout(center, 120)
                    right()
                    setTimeout(right, 80)
                    center()
                    setTimeout(center, 40)
                    left()     */                
                    
                    alert("Food not found!");
                }
            });
    }


  return (
    <div className='mainPage'>
      <Route exact path="/recipes"> <h1 className="text">Henry Food</h1> </Route>
      <Route exact path="/recipes" render={() => (<Cards foods={foods} /* onClose={foods} */ /* lang={lang} */ />)}/>
    </div>
  );
}

export default MainPage;

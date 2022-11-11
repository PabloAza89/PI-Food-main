import React from "react";
import '../styles/Cards.css';
import Card from './Card.jsx';

export default function Cards({ toShow }) {

  // let arr0to2 = [] // ARR 1 TO 3
  // let arr3to5 = [] // ARR 4 TO 6
  // let arr6to8 = [] // ARR 7 TO 9

  let arr0to2 = toShow.slice(0,3) // ARR 1 TO 3
  let arr3to5 = toShow.slice(3,6)
  let arr6to8 = toShow.slice(6,9)

  
  return (
    <div>
      <div className='cards'>
        {/* {toShow.map(e => <Card
            key={e.id}
            id={e.id}
            title={e.title}
            summary={e.summary}
            healthScore={e.healthScore}
            analyzedInstructions={e.analyzedInstructions}
            diets={e.diets}
            image={e.image} // OPTION
            dishTypes={e.dishTypes} // OPTION
            database={e.database} // OPTION
          /> )} */}
          {arr0to2.map(e => <Card
            key={e.id}
            id={e.id}
            title={e.title}
            summary={e.summary}
            healthScore={e.healthScore}
            analyzedInstructions={e.analyzedInstructions}
            diets={e.diets}
            image={e.image} // OPTION
            dishTypes={e.dishTypes} // OPTION
            database={e.database} // OPTION
          /> )} 
      </div>
      <div className='cards'>
      {arr3to5.map(e => <Card
            key={e.id}
            id={e.id}
            title={e.title}
            summary={e.summary}
            healthScore={e.healthScore}
            analyzedInstructions={e.analyzedInstructions}
            diets={e.diets}
            image={e.image} // OPTION
            dishTypes={e.dishTypes} // OPTION
            database={e.database} // OPTION
          /> )} 

      </div>
      <div className='cards'>
      {arr6to8.map(e => <Card
            key={e.id}
            id={e.id}
            title={e.title}
            summary={e.summary}
            healthScore={e.healthScore}
            analyzedInstructions={e.analyzedInstructions}
            diets={e.diets}
            image={e.image} // OPTION
            dishTypes={e.dishTypes} // OPTION
            database={e.database} // OPTION
          /> )} 
      </div>
    </div>
  );
}

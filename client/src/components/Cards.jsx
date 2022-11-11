import React from "react";
import '../styles/Cards.css';
import Card from './Card.jsx';

export default function Cards({ toShow }) {

  let arraySplitedBy9 = []
  let numberIndexToDisplay = 1
 

  if ((toShow.length / 9 ) > 0 || (toShow.length / 9 ) <= 1) {
    arraySplitedBy9.push(toShow.slice(0,9))
  }
  if ((toShow.length / 9 ) > 1 || (toShow.length / 9 ) <= 2) {
    arraySplitedBy9.push(toShow.slice(9,18))
  } 
  
  //console.log("DIVIDIDO EN 2", arraySplitedBy9)
  //console.log("TO SHOW", arraySplitedBy9[numberIndexToDisplay])
  console.table(toShow)
  console.table(arraySplitedBy9[numberIndexToDisplay])

  let arr0to2 = arraySplitedBy9[numberIndexToDisplay].slice(0,3)  // ARR 1 TO 3
  let arr3to5 = arraySplitedBy9[numberIndexToDisplay].slice(3,6) // ARR 4 TO 6
  let arr6to8 = arraySplitedBy9[numberIndexToDisplay].slice(6,9) // ARR 7 TO 9

  
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

          

          {/* {arr0to2.map(e => <Card */}

          { 
          arr0to2.map(e => <Card

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

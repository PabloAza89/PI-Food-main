import React from "react";
import '../styles/Cards.css';
import Card from './Card.jsx';

export default function Cards({ toShow }) {
  
  return (
    
    <div className='cards'>
      {/* {console.log("CARDS PLURAL", foods)} */}
      {
        toShow.map(e => <Card
          key={e.id}
          id={e.id}
          title={e.title}
          summary={e.summary}
          healthScore={e.healthScore}
          analyzedInstructions={e.analyzedInstructions}
          image={e.image} // OPTION
          diets={e.diets}
          dishTypes={e.dishTypes} // OPTION
          database={e.database} // OPTION
      
        /> )}
        
    </div>
  );
  
}

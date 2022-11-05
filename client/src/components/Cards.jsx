import React from 'react';
import './Cards.css';
import Card from './Card.jsx';

export default function Cards({foods}) {
 
 /*  let filterRepeat = foods.filter((value, index, self) =>
  index === self.findIndex((e) => (
    e.id === value.id
  )))
   */
  return (
    
    <div className='cards'>      
      
      {console.log("CARDS PLURAL", foods)}
      
      {//{filterRepeat.map(c => <Card}
      foods.map(e => <Card
          key={e.id}
          id={e.id}
          title={e.title}
          summary={e.summary}
          healthScore={e.healthScore}
          image={e.image}
          /* analyzedInstructions={c.analyzedInstructions} */
          diets={e.diets}

      
        /> )}
    </div>
  );
  
}

import React from 'react';
import './Cards.css';
import Card from './Card.jsx';

export default function Cards({foods}) {
 
  /* let filterRepeat = foods.filter((value, index, self) =>
  index === self.findIndex((e) => (
    e.id === value.id
  ))) */
      
  return (
    <div className='cards'>
      {console.log("TITLE", title)}
      {/* {filterRepeat.map(c => <Card */}
      {foods.map(c => <Card
          key={c.id}
          id={c.id}
          title={c.title}
          summary={c.summary}
          healthScore={c.healthScore}
          analyzedInstructions={c.analyzedInstructions}
          diets={c.diets}

          //image={c.image}
          //onClose={() => onClose(c.id)}
        /> )}
    </div>
  );
  
}

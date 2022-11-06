import React, { useState, useEffect } from "react";
import './Cards.css';
import Card from './Card.jsx';

export default function Cards({  foods}) {
  
  return (
    
    <div className='cards'>      
    
      {console.log("CARDS PLURAL", foods)}
      
      {/* <Card onSearch={onSearch}/> */}
      {
      //filterRepeat.map(e => <Card
  
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

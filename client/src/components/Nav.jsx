import React, { useState, useEffect } from "react";
import '../styles/Nav.css';


export default function Cards({diets, dietName, handleDietNameChange, onDietFilter}) {
 
 
  
  return (
    
    <div className='div'>
        <select  name="dietName" value={dietName}  onChange={event => handleDietNameChange(event.target.value)      }>
              {diets.map(e =>(
                <option id={e.id} key={e.id}>{e.title} </option>
              ))}
        </select >
    </div>
  );
  
}

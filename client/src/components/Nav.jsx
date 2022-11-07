import React from "react";
import '../styles/Nav.css';


export default function Cards({diets , handleDietNameChange, handleHealthLevelChange}) {
 
// qq.sort((a,b) => 
//   a.healthScore - b.healthScore
// )
  
  return (
    
    <div className='div'>
        <select onChange={event => handleDietNameChange(event.target.value) }>
              {diets.map(e =>(
                <option id={e.id} key={e.id}>{e.title} </option>
              ))}
        </select >
        <select onChange={event => handleHealthLevelChange(event.target.value) }>
                <option id="Less Healthy" >Less Healthy </option>
                <option id="More Healthy" >More Healthy </option>
        </select >
    </div>

    
  );
  
}

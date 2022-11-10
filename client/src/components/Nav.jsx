import React, { useState } from "react";
import '../styles/Nav.css';
import { Link } from "react-router-dom";
import logo from "../images/logo.png";

export default function Cards({diets , handleTitleMatchChange , handleDietNameChange, handleHealthLevelChange, handleSortNameChange}) {

  const [healthSelected, setHealthSelected] = useState("")
  const [aZSelected, setAZSelected] = useState("")
  
  //console.log("SELECTED TEST", selected)
  const [city, setCity] = useState("");

  function disablerHealthy(event) {
    if ( event === "-- select an option --") {
      setHealthSelected(true)    
    }
  }

  function disablerAZ(event) {
    if ( event === "-- select an option --") {
      setAZSelected(true)    
    }
  }

  return (
    
    <div className='div'>
        <div className="firstRow">
          <img className="image" src={logo} alt=""></img>
          <form className="search" onSubmit={(event) => {
              event.preventDefault();
              handleTitleMatchChange(city)
             }}>
              <input className="findAdd"
                  type="text"        
                  placeholder="Find recipe..."
                  value={city} 
                  onChange={event => setCity(event.target.value)}
              />
              <input className="findAdd"
              type="submit" value="SEARCH !" />
          </form>
          <Link to="/create"> <button className="button">CREATE RECIPE !</button> </Link>
        </div>
        <div className="firstRow">
          <select  onChange={event => handleDietNameChange(event.target.value) }>          
                {diets.map(e =>(
                  <option id={e.id} key={e.id}>{e.title}</option>
                ))}
          </select >
          <select  onChange={event => handleHealthLevelChange(event.target.value) } onClick={event => disablerHealthy(event.target.value)} >               
                    <option id="-- select an option --" disabled={ healthSelected ? true : false }  >-- select an option --</option>
                    <option id="More Healthy" >More Healthy</option>
                    <option id="Less Healthy" >Less Healthy</option>                  
          </select >
          <select  onChange={event => handleSortNameChange(event.target.value) } onClick={event => disablerAZ(event.target.value)} >
                  <option id="-- select an option --" disabled={ aZSelected ? true : false }  >-- select an option --</option>
                  <option id="A-Z" >A-Z</option>
                  <option id="Z-A" >Z-A</option>
          </select >
          </div>        
    </div>

    
  );
  
}

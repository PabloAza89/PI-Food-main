import React, { useState } from "react";
import '../styles/Nav.css';
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import { useSelector , useDispatch } from 'react-redux';
import { setIndexChoosen } from '../actions';


export default function Cards({diets , handleTitleMatchChange , handleDietNameChange, handleHealthLevelChange, handleSortNameChange}) {

  const dispatch = useDispatch()

  let [healthSelected, setHealthSelected] = useState("")
  let [aZSelected, setAZSelected] = useState("")
  

  const [city, setCity] = useState("");

  function disablerHealthy(event) {
    if ( event === "Sort by Healthy") {
      setAZSelected(false)  
      setHealthSelected(true)    
    }
  }

  function disablerAZ(event) {
    //setHealthSelected({state: ""})
    if ( event === "Sort alphabetically") {
      setHealthSelected(false)    
      setAZSelected(true)    
    }
  }

  return (
    
    <div className='div'>
        <div className="firstRow">
            <Link id="background" to="/">
               <img className="iconImage" src={logo} alt=""></img>
            </Link>

          <form className="search" onSubmit={(event) => {
              event.preventDefault();
              handleTitleMatchChange(city);
              
             }}>
              <input className="findAdd"
                  type="text"        
                  placeholder="Find recipe..."
                  value={city} 
                  onChange={event => setCity(event.target.value) + dispatch(setIndexChoosen(0)) }
              />
              <input className="findAdd"
              type="submit" value="SEARCH !" />
          </form>
          <Link to="/create"> <button className="button">CREATE RECIPE !</button> </Link>
        </div>
        <div className="firstRow">
          <select  onChange={event => handleDietNameChange(event.target.value) + dispatch(setIndexChoosen(0)) }>          
                {diets.map(e =>(
                  <option id={e.id} key={e.id}>{e.title}</option>
                ))}
          </select >
          <select  onChange={event => handleHealthLevelChange(event.target.value) } onClick={event => disablerHealthy(event.target.value) } >
                    <option id="-- select an option --" disabled={ healthSelected ? true : false }  >Sort by Healthy</option>
                    <option id="More Healthy" >{aZSelected ? "Sort by Healthy" : "More Healthy"}</option>
                    <option id="Less Healthy" >{aZSelected ? "Sort by Healthy" : "Less Healthy"}</option>                  
          </select >
          <select onChange={event => handleSortNameChange(event.target.value) } onClick={event => disablerAZ(event.target.value)} >
          <option id="-- select an option --" disabled={ aZSelected ? true : false } >Sort alphabetically</option>
                  <option id="A-Z" >{healthSelected ? "Sort alphabetically" : "A-Z"}</option>
                  <option id="Z-A" >{healthSelected ? "Sort alphabetically" : "Z-A"}</option>
          </select >
          
          
          </div>        
    </div>

    
  );
  
}

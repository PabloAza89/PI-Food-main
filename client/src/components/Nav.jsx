import React, { useState } from "react";
import '../styles/Nav.css';
import { Link } from "react-router-dom";
import logo from "../images/logo.png";

export default function Cards({diets , handleTitleMatchChange , handleDietNameChange, handleHealthLevelChange, handleSortNameChange}) {

  
  const [city, setCity] = useState("");

  return (
    
    <div className='div'>
        <div className="firstRow">
          <img className="image" src={logo} alt=""></img>
          <form className="search" onSubmit={(e) => {
              e.preventDefault();
              handleTitleMatchChange({name: city, selected: true})
              //onSearch(city);
             }}>
              <input className="findAdd"
                  type="text"        
                  placeholder="Find recipe..."
                  /* onFocus={e => setCity("")} */
                  /* value={city} */
                  onChange={e => city.push(e.target.value)}
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

            {/*       <option id="vegan" key="vegan">vegan</option>
                  <option id="whole 30" key="whole 30">whole 30</option> */}

          </select >
          <select  onChange={event => handleHealthLevelChange(event.target.value) }>
                  {/* <option  id="Less Healthy" key="Less Healthy">Less Healthy</option>
                  <option id="More Healthy" key="More Healthy">More Healthy</option> */}
                     <option id="More Healthy" key="More Healthy">More Healthy</option>
                     <option id="Less Healthy" key="Less Healthy">Less Healthy</option>

                  {/* <option  id="Less Healthy" key="Less Healthy">Less Healthy</option> */}
                  
          </select >
          <select  onChange={event => handleSortNameChange(event.target.value) }>
                  <option id="A-Z" key="A-Z">A-Z</option>
                  <option id="Z-A" key="Z-A">Z-A</option>
          </select >

      

          </div>
        
    </div>

    
  );
  
}

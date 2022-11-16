import React, { useState } from "react";
import "../styles/Form.css";
import noImage1 from "../images/noImage1.jpg";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";

export default function Form() {

  let [created, setCreated] = useState(0)
  const [dietSelected, setDietSelected] = useState([])
  let uniqueNamesDiets = Array.from(new Set(dietSelected));

  let handleDietSelected = (event) => {   
    setDietSelected(current => [...current, event])
  }
  
  function handleNewRecipe() {
    setDietSelected([])
    setCreated(0)
    //uniqueNamesDiets = Array.from(new Set(dietSelected));
    
    //created = 0
    setTitle("")
    setHealthScore("")
    setSummary("")
    setAnalyzedInstructions("")
  }

  const [title, setTitle] = useState('');
  const [healthScore, setHealthScore] = useState("");
  const [summary, setSummary] = useState("");
  const [analyzedInstructions, setAnalyzedInstructions] = useState("");
  
  const [error, setError] = useState('');

  console.log("QQ", created)

  function handleSubmitButton(value) {
    //if (value === 1) return true
    if (title.length === 0) return true
    if (uniqueNamesDiets.length === 0) return true
    if (healthScore === "") return true
    if (summary.length === 0) return true
    if (analyzedInstructions.length === 0) return true 
    
    else {
          
      return false
    }
  }

   const handleSubmit = async (e) => {
    e.preventDefault();
    if (created === 0) {
      
      await fetch('http://localhost:3001/recipes', {
       method: 'POST',
       body: JSON.stringify({
          title: title,
          diets: uniqueNamesDiets,
          healthScore: healthScore,
          summary: summary,
          analyzedInstructions: analyzedInstructions
       }),
       headers: {
          'Content-type': 'application/json; charset=UTF-8',
       },    
       
    }).then((res) => res.json())     
      .then(setCreated(1))
      .catch((err) => {
        console.log(err.message);
      });
      
    } else {
      alert("La receta ya fue cargada !");
      //handleDietSelected(1)
    }
      
 };

  function validateTitle(value) {
    if(/(!|¡|@|[?]|¡|<|>|[/]|[\\]|%|[[]|]|[|]|°|#|[$]|&|[()]|[)]|=|_|[*]|¿|[+]|~|{|}|`|\^)/.test(value) && value.length !== 0) {
      setError('Special characters not allowed in title !');
    } else { setError('') }
    setTitle(value);
  }
 
  function validateHealthScore(value) {
    if(value < 0 || value > 100) {
      setError('Allowed numbers are between 0 and 100 !');
    }
    else if(!/^[0-9]*$/.test(value) && value.length !== 0) {
      setError('Only numbers allowed in health score !');
    } else { setError('') }
    setHealthScore(value)
  }

  function validateSummary(value) {
    if(/(!|¡|@|[?]|¡|<|>|[/]|[\\]|%|[[]|]|[|]|°|#|[$]|&|[()]|[)]|=|_|[*]|¿|[+]|~|{|}|`|\^)/.test(value) && value.length !== 0) {
      setError('Special characters not allowed in Summary !');
    } else { setError('') }
    setSummary(value)
  }

  function validateAnalyzedInstructions(value) {
    if(/(!|¡|@|[?]|¡|<|>|[/]|[\\]|%|[[]|]|[|]|°|#|[$]|&|[()]|[)]|=|_|[*]|¿|[+]|~|{|}|`|\^)/.test(value) && value.length !== 0) {
      setError('Special characters not allowed in Analyzed Instructions !');
    } else { setError('') }
    setAnalyzedInstructions(value)
  }
  
  


  return (
    <div className="form-body">
      <Link to="/">
        <img className="iconImageForm" src={logo} alt=""></img>
      </Link>
      <Link id="iconText" to="/">
        <h2 >Go Back !</h2> 
      </Link>
      <form className="form" onSubmit={handleSubmit}>        
        <img className="image-form" src={noImage1} alt=""></img>
        <div className="options-main-align">
          <div className="options-main-left">
            <div className="options-left">Title:</div>
            <div className="options-left">Health Score:</div>
            <div className="options-left">Summary:</div>
            <div className="options-left">Instructions:</div>
            <div className="options-left">Diets:</div>
          </div>
          <div className="options-main-right">           
            <input className='danger' name="title" type="text" value={title} placeholder="e.g. Pasta.." onChange={(e) => validateTitle(e.target.value)}/>
            <input className='danger' name="healthScore" type="text" value={healthScore} placeholder="e.g. 73" onChange={(e) => validateHealthScore(e.target.value)}/>
            <input className='danger' name="summary" type="text" value={summary} placeholder="e.g. Healthy pasta recipe" onChange={(e) => validateSummary(e.target.value)}/>
            <input className='danger' name="analyzedInstructions" type="text" value={analyzedInstructions} placeholder="e.g. Cut pasta, fry tomatoes.." onChange={(e) => validateAnalyzedInstructions(e.target.value)}/>
            <select id="choose" classname="choose" onChange={event => handleDietSelected(event.target.value) }  >
              <option id="-- select an option --"  >-- select an option --</option>
              <option >Gluten Free</option>
              <option >Ketogenic</option>
              <option >Vegan</option>
              <option >Lacto Ovo Vegetarian</option>
              <option >Pescatarian</option>
              <option >Paleolithic</option>
              <option >Primal</option>
              <option >Fodmap Friendly</option>
              <option >Whole 30</option>
              <option >Dairy Free</option>
            </select >
          </div>
        </div>
        <div>
      {/*   {!uniqueNamesDiets?"asd":null} */}
      {uniqueNamesDiets[0]&&"Diets choosen: "}{uniqueNamesDiets.map(function(e) {
                        if ((uniqueNamesDiets.indexOf(e) !== uniqueNamesDiets.length - 1)) {
                            return e + " + "
                        } else return e
                        })}
          
                 
        </div>
        <input type="submit" disabled={handleSubmitButton()} value="CREATE !" />
        <input type="submit" onClick={handleNewRecipe} value="CREATE NEW RECIPE!" />  
        {!error ? null : <span className="alert">{error}</span>}    
        
      </form>
      </div>      
      
      
    );
}
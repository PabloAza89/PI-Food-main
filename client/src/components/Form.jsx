import React, { useState } from "react";
import "../styles/Form.css";
import noImage1 from "../images/noImage1.jpg";

export default function Form() {


  
  const [title, setTitle] = useState('');
  const [diets, setDiets] = useState([]);
  const [healthScore, setHealthScore] = useState("");
  const [summary, setSummary] = useState([]);
  const [analyzedInstructions, setAnalyzedInstructions] = useState([]);
  
  const [error, setError] = useState('');

   const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch('http://localhost:3001/recipes', {
       method: 'POST',
       body: JSON.stringify({
          title: title,
          diets: diets,
          healthScore: healthScore,
          summary: summary,
          analyzedInstructions: analyzedInstructions
       }),
       headers: {
          'Content-type': 'application/json; charset=UTF-8',
       },
    //    headers: {
    //     'Content-type': 'application/json',
    //  },
    }).then((res) => res.json())     
      .catch((err) => {
        console.log(err.message);
      });
 };

  function validateTitle(value) {
    if(/(!|¡|@|[?]|¡|<|>|[/]|[\\]|%|[[]|]|[|]|°|#|[$]|&|[()]|[)]|=|_|[*]|¿|[+]|~|{|}|`|\^)/.test(value) && value.length !== 0) {
      setError('Special characters not allowed in title !');
    } else { setError('') }
    setTitle(value);
  }

  function validateDiets(value) {
    //if(/(!|¡|@|[?]|¡|<|>|[/]|[\\]|%|[[]|]|[|]|°|#|[$]|&|[()]|[)]|=|_|[*]|¿|[+]|~|{|}|`|\^)/.test(value) && value.length !== 0) {
      if(value.length > 0) {
      setError('Special characters not allowed in diets !');
    } else { setError('') }
    // vegan,pescatarian // EXAMPLE IN UI
    let arr = value.split(",")
    let qq = arr.map(e => e.trim())
    setDiets(qq)
  }

  // let ww = qq.split(",")
  // ww.map(e => e.trim())

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
      
      <form className="form" onSubmit={handleSubmit}>
        <img className="image" src={noImage1} alt=""></img>
        <div className="row">
          Title:
          <input className='danger' name="title" type="text" value={title} placeholder="e.g. Pasta.." onChange={(e) => validateTitle(e.target.value)}/>
        </div>
        
        <div className="row">
          Diets:
          <input className='danger' name="diets" type="text" value={diets} placeholder="e.g. Vegan, primal.." onChange={(e) => validateDiets(e.target.value)}/>
        </div>
        <div className="row">
          Health Score:
          <input className='danger' name="healthScore" type="text" value={healthScore} placeholder="e.g. 73" onChange={(e) => validateHealthScore(e.target.value)}/>
        </div>
        <div className="row">
          Summary:
          <input className='danger' name="summary" type="text" value={summary} placeholder="e.g. Healthy pasta recipe" onChange={(e) => validateSummary(e.target.value)}/>
        </div>
        <div className="row">
          Instructions:
          <input className='danger' name="analyzedInstructions" type="text" value={analyzedInstructions} placeholder="e.g. Cut pasta, fry tomatoes.." onChange={(e) => validateAnalyzedInstructions(e.target.value)}/>
        </div>
        <input type="submit" value="CREATE !" />
        {!error ? null : <span className="alert">{error}</span>}
      </form>
    );
}
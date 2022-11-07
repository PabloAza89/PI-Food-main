import React, { useState } from "react";
import "../styles/Form.css";
//import { Link } from "react-router-dom";

export default function Form() {
  const [title, setTitle] = useState('');
/*   const [diets, setDiets] = useState('');
  const [healthScore, setHealthScore] = useState(0);
  const [summary, setSummary] = useState('');
  const [analyzedInstructions, setAnalyzedInstructions] = useState(''); */
  
  
  const [error, setError] = useState('');
  function validateUser(value) {
    if(!/\S+@\S+\.\S+/.test(value)) {
      setError('el usuario tiene que ser un email');
    } else {
      setError('');
    }
    setTitle(value);
  }
  return (
      <form className="form">
        <input className={error && 'danger'}
          name="title" value={title} placeholder="title" onChange={(e) => validateUser(e.target.value)}/>
        {!error ? null : <span>{error}</span>}
        {/* <input name="dishTypes" value={dishTypes} placeholder="dishTypes" type="dishTypes" onChange={(e) => setDishTypes(e.target.value)}/> */}
        <input type="submit" value="CREATE !" />
      </form>
    );
}
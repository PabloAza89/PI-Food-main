import React, { useState, useEffect } from "react";
import '../styles/Cards.css';
import Card from './Card.jsx';
import { useSelector , useDispatch } from 'react-redux';
import { setAllIndexes } from '../actions';

export default function Cards({ toShow }) {
  const [helperToUpdate, setHelperToUpdate] = useState([])
  // useEffect(() => {
  //   fetch('http://localhost:3001/diets')
  //   .then(r => r.json())
  //   .then(res => setHelperToUpdate(res))  
  //   }, []); 

    // useEffect(() => {
    //   fetch('http://localhost:3001/recipes')
    //   .then((r) => r.json())
    //   .then((res) => setHelperToUpdate(res))  
    // }, []);

  const indexChoosen = useSelector( state => state.indexChoosen )

  const dispatch = useDispatch()  

  let arraySplitedBy9 = []
  
  let numberIndexToDisplay = indexChoosen  

  function qq() {
    for (let i = 0; i < toShow.length; i += 9) {
          let pedazo = toShow.slice(i, i + 9);
          arraySplitedBy9.push(pedazo);
    }
  }

  let arr0to2
  let arr3to5
  let arr6to8  

  function two () {
    arr0to2 = arraySplitedBy9[0]?arraySplitedBy9[numberIndexToDisplay].slice(0,3):[]
    arr3to5 = arraySplitedBy9[0]?arraySplitedBy9[numberIndexToDisplay].slice(3,6):[]
    arr6to8 = arraySplitedBy9[0]?arraySplitedBy9[numberIndexToDisplay].slice(6,9):[]
  }

  qq()
  two()

  dispatch(setAllIndexes(arraySplitedBy9.length))

  return (
    <div>
      <div className='cards'>              
       {arr0to2.map(e => <Card
        key={e.id}
        id={e.id}
        title={e.title}
        summary={e.summary}
        healthScore={e.healthScore}
        analyzedInstructions={e.analyzedInstructions}
        diets={e.diets}
        image={e.image} 
        dishTypes={e.dishTypes}
        /> )} 
      </div>
      <div className='cards'>
        {arr3to5.map(e => <Card
          key={e.id}
          id={e.id}
          title={e.title}
          summary={e.summary}
          healthScore={e.healthScore}
          analyzedInstructions={e.analyzedInstructions}
          diets={e.diets}
          image={e.image} 
          dishTypes={e.dishTypes}
          /> )}
      </div>
      <div className='cards'>
        {arr6to8.map(e => <Card
          key={e.id}
          id={e.id}
          title={e.title}
          summary={e.summary}
          healthScore={e.healthScore}
          analyzedInstructions={e.analyzedInstructions}
          diets={e.diets}
          image={e.image}
          dishTypes={e.dishTypes}
          /> )} 
      </div>
    </div>
  );
}

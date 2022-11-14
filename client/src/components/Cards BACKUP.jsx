import React from "react";
import '../styles/Cards.css';
import Card from './Card.jsx';
import { useSelector , useDispatch } from 'react-redux';
import { setAllIndexes } from '../actions';
import store from '../store/store';

export default function Cards({ toShow }) {
    // FUNCIONA PERO NO REACCIONA
  // const stateStore = () => {return store.getState() }
  // console.log("INDEX CHOOSEN FROM STORE", stateStore().indexChoosen)

  // FUNCIONA Y REACCIONA BIEN !!
  const indexChoosen = useSelector( state => state.indexChoosen )
  console.log("INDICE ELEGIDO", indexChoosen )

  const allIndexes = useSelector( state => state.allIndexes )
  console.log("ALL INDEXES", allIndexes )

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

  console.log("ARRAY LENGTH", arraySplitedBy9.length)
  console.log("ARRAY LENGTH", arraySplitedBy9)

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
        image={e.image} // OPTION
        dishTypes={e.dishTypes} // OPTION
        database={e.database} // OPTION
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
          image={e.image} // OPTION
          dishTypes={e.dishTypes} // OPTION
          database={e.database} // OPTION
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
          image={e.image} // OPTION
          dishTypes={e.dishTypes} // OPTION
          database={e.database} // OPTION
          /> )}
      </div>
    </div>
  );
}

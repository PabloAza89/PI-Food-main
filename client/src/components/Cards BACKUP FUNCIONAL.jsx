import React /* , { useEffect } */ from "react";
import '../styles/Cards.css';
import Card from './Card.jsx';
import { useSelector } from 'react-redux';
//import store from '../store/store.js';
//import store from '../reducers/index.js';

export default function Cards({ toShow }) {

  // const stateStore = () => {
  //   return store.getState();    
  // }
  
  
  

  let arraySplitedBy9 = []
  let second = [];

  let numberIndexToDisplay = 0
  
  

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
    arr0to2 = arraySplitedBy9
    arr3to5 = arraySplitedBy9
    arr6to8 = arraySplitedBy9
  }
//pp()

//   async function ww () {
//     for (let i = 0; i < toShow.length; i += 9) {
//     let pedazo = toShow.slice(i, i + 9);
//     arraySplitedBy9.push(pedazo);
//     }
    
//   }
//  ww()
  // if ((toShow.length / 9 ) > 0 || (toShow.length / 9 ) <= 1) {
  //   arraySplitedBy9.push(toShow.slice(0,9))
  // }
  // if ((toShow.length / 9 ) > 1 || (toShow.length / 9 ) <= 2) {
  //   arraySplitedBy9.push(toShow.slice(9,18))
  // } 
  
 

 
  
  // function qq() {
  //   if (!stateStore().left && !stateStore().right) {
  //     numberIndexToDisplay = 0
  //   }
  //   if (stateStore().left) {
  //     numberIndexToDisplay = 0
  //   }
  //   if (stateStore().right) {
  //     numberIndexToDisplay = 1
  //   }
  // }

  // qq()

  //console.log("TEST LEFT", useSelector((state) => state.left))
  //console.log("TEST RIGHT", useSelector((state) => state.right))

  //  function qqqq() {
  //   if (!stateStore().left && !stateStore().right) {
  //     numberIndexToDisplay = 0
  //   }
  //   if (stateStore().left) {
  //     numberIndexToDisplay = 0
  //   }
  //   if (stateStore().right) {
  //     numberIndexToDisplay = 1
  //   }
  // }

  function Qqqq() {
    useSelector(state => {
     if (!state.left && !state.right) {
      numberIndexToDisplay = 0
    }
    if (state.left) {
      numberIndexToDisplay = 0
    }
    if (state.right) {
      numberIndexToDisplay = 1
    }

    })

    
  }

  Qqqq()


  
  Promise.all([qq()])
  .then(two())
  .then(second = [].concat(arraySplitedBy9))
  .then(second[0]?(
    arr0to2 = second[numberIndexToDisplay].slice(0,3),
    arr3to5 = second[numberIndexToDisplay].slice(3,6),
    arr6to8 = second[numberIndexToDisplay].slice(6,9)
  ):[])
  
  
    // console.log("SECOND",second[numberIndexToDisplay])
    // console.log("SPLITED 1", arr0to2)
    // console.log("SPLITED 2", arr3to5)
    // console.log("SPLITED 3", arr6to8)

    // console.table(second[numberIndexToDisplay])
    // console.table(arr0to2)
    // console.table(arr3to5)
    // console.table(arr6to8)

    
  //console.log("STORE LEFT", stateStore().left)
  //console.log("STORE RIGHT", stateStore().right)

  return (
    <div>
      <div className='cards'>
        {/* {toShow.map(e => <Card
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
          /> )} */}
           

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


         {/*  {arraySplitedBy9.map(e => <Card
      
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
          /> )} */} 

      </div>
    </div>
  );
}

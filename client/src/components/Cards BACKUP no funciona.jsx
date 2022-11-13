import React from "react";
import '../styles/Cards.css';
import Card from './Card.jsx';
import { useSelector } from 'react-redux';
import store from '../store/store.js';

export default function Cards({ toShow }) {

  
  //console.log("TEST LEFT", useSelector((state) => state.left))
  //console.log("TEST RIGHT", useSelector((state) => state.right))
  

  let arraySplitedBy9 = []

  let numberIndexToDisplay = 0
  
  // let arr0to2  
  // let arr3to5 
  // let arr6to8 

  function qq() {
    //if (toShow.length > 0) {
      for (let i = 0; i < toShow.length; i += 9) {
           
            let pedazo = toShow.slice(i, i + 9);
            arraySplitedBy9.push(pedazo);
            }
      }
      // arr0to2 = arraySplitedBy9[numberIndexToDisplay]//.slice(0,3)  // ARR 1 TO 3
      // arr3to5 = arraySplitedBy9[numberIndexToDisplay]//.slice(3,6) // ARR 4 TO 6
      // arr6to8 = arraySplitedBy9[numberIndexToDisplay]//.slice(6,9) // ARR 7 TO 9
      /*  else {
        alert("ciudad")
      } */  
    //}
  qq() 

  let arr0to2
  let arr3to5
  let arr6to8

  function two () {
    arr0to2 = arraySplitedBy9[0]
    arr3to5 = arraySplitedBy9[0]
    arr6to8 = arraySplitedBy9[0]

  }
  
  two()

  // const a = arr0to2
  // const b = arr3to5
  // const c = arr6to8

  // setTimeout(() => {
  //   arr0to2 = arraySplitedBy9[0].slice(0,3)  // ARR 1 TO 3
  //   arr3to5 = arraySplitedBy9[0].slice(3,6) // ARR 4 TO 6
  //   arr6to8 = arraySplitedBy9[0].slice(6,9) // ARR 7 TO 9
    
  // }, 500);
  function spliter() {
    

  }
  spliter()


  

  // console.log("A", arr0to2)
  // console.log("B", arr3to5)
  // console.log("C", arr6to8)
  // // console.log("A", a)
  // console.log("B", b)
  // console.log("C", c)


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
  
 

//  const stateStore = () => {
//     return store.getState();    
//   }
  
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

  // console.log("STORE LEFT", stateStore().left)
  // console.log("STORE RIGHT", stateStore().right)
  // console.log("NUMBER DISPLAYED", numberIndexToDisplay)
 
  

  
  //let ee = [...arraySplitedBy9]



  // let arr0to2 = arraySplitedBy9[numberIndexToDisplay].slice(0,3)  // ARR 1 TO 3
  // let arr3to5 = arraySplitedBy9[numberIndexToDisplay].slice(3,6) // ARR 4 TO 6
  // let arr6to8 = arraySplitedBy9[numberIndexToDisplay].slice(6,9) // ARR 7 TO 9

  
  // console.log(arraySplitedBy9)
  // console.log(arraySplitedBy9.length)

console.log("TO SHOW", toShow)
console.log("ESTE", arraySplitedBy9)
  
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
           

       {/*     {arr0to2.map(e => <Card
          

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
          /> )}  */}

      </div>

      <div className='cards'>

    {/*   {arr3to5.map(e => <Card
      
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
          /> )}  */}

      </div>
      <div className='cards'>

    {/*   {arr6to8.map(e => <Card
      
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
          /> )}  */}


          {/* {arraySplitedBy9.map(e => <Card
      
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
          /> )}  */}

      </div>
    </div>
  );
}

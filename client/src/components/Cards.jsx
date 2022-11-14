import React , { useEffect } from "react";
import '../styles/Cards.css';
import Card from './Card.jsx';
import {  useSelector , useDispatch } from 'react-redux';
import { allIndexes/*  , indexChoosen , */ , setAllIndexes } from '../actions';
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
  
  //let arrayLength = 0

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

  // function two () {
  //   arr0to2 = arraySplitedBy9
  //   arr3to5 = arraySplitedBy9
  //   arr6to8 = arraySplitedBy9
  // }

  function two () {
    arr0to2 = arraySplitedBy9[0]?arraySplitedBy9[numberIndexToDisplay].slice(0,3):[]
    arr3to5 = arraySplitedBy9[0]?arraySplitedBy9[numberIndexToDisplay].slice(3,6):[]
    arr6to8 = arraySplitedBy9[0]?arraySplitedBy9[numberIndexToDisplay].slice(6,9):[]
  }


 /*  function indexes() {    
    return dispatch(indexChoosen(1))
  } */

  

/*   function indexes() {
    // let arr = [1,2,3]
    // let qq =  arr.map(e => (
    //  () => dispatch(indexChoosen(1))
    // ))
    return dispatch(indexChoosen(1))
  }
  function AllIndexesButtons() {
    let arr = [1,2,3]
    let qq = arr.map(e => (
      <button key={e}  onClick={() => indexes()} >{e}</button>
    ))
     //qqqq = qq 
    return qq
      
  } */

  // FUNCTIONAL PROMISE
  // Promise.all([qq()])
  // .then(two())
  // //.then(second = [].concat(arraySplitedBy9))
  // .then(arraySplitedBy9[0]?setArrayLength():[])
  // .then(arraySplitedBy9[0]?dispatchArrayLength():[])
  // .then(arraySplitedBy9[0]?(
  //   arr0to2 = arraySplitedBy9[numberIndexToDisplay].slice(0,3),
  //   arr3to5 = arraySplitedBy9[numberIndexToDisplay].slice(3,6),
  //   arr6to8 = arraySplitedBy9[numberIndexToDisplay].slice(6,9)
  // ):[])
  
  //.then(AllIndexesButtons())
  
  
  
    
  //console.log("STORE LEFT", stateStore().left)
 
  //console.log("BACK INDEX CHOOSEN", useSelector(state => state.indexChoosen))
  
  
  


  qq()
 

  two()

 
 

  // let ww = arraySplitedBy9.length

  // useEffect(() => {
  //     dispatch(allIndexes(ww))
  // }, [dispatch, ww]);

  // function Asddd() {
  //   if (useSelector(state => state.allIndexes) === undefined) {
  //     let ww = arraySplitedBy9.length

  //     //useEffect(() => {
  //         dispatch(allIndexes(2))
  //     //}, [dispatch, ww]);
  //     //});

  //   }
  //   let ww = arraySplitedBy9.length

  //     //useEffect(() => {
  //         dispatch(allIndexes(2))
  //     //});

  //     //});
    
  // }

 

  // Asddd()

  //PROBANDO




  //dispatchArrayLength()
  

  
  //console.log("ARRAY LENGTH FROM CARDS", arraySplitedBy9.length)
  //console.log("ALL INDEXES LENGTH", useSelector((state) => state.allIndexes))
  //Promise.all([qq(), two()])


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

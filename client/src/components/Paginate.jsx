import React  , { /* useState, */ useEffect } from "react";
import {  useStore , shallowEqual, useSelector , useDispatch } from 'react-redux';
import { getIndexChoosen , setIndexChoosen /* , indexChoosen  */ } from '../actions';
import '../styles/Paginate.css';

import store from '../store/store';
//import store from '../reducers/index.js';

function Paginate() {

  // FUNCIONA ES EL QUE VA !!!
  const stateStore = () => {
    return store.getState();    
    //return qq
  }

 
console.log("INDEX CHOOSEN FROM STORE", stateStore().indexChoosen)
console.log("STORE GENERAL", stateStore())

//console.log("TEST LEFT", useSelector((state) => state.getIndexChoosen))
const dispatch = useDispatch()

//TAMBIEN FUNCIONA !!!
// const asd = useSelector(state => state.left)
// console.log("ASDASD", asd)

/* const state = getState()
console.log(state) */

//FUNCIONAL
// function AllIndexesButtons() {
//   //let maxNumber = useSelector(state => state.allIndexes)
//   //let www = useSelector(state => state.allIndexes)
//   let www = asd
//   let maxNumber = www
//   let helper = 1
//   let arrayOfButtons = []
//   do {

//     arrayOfButtons.push(helper)
//     helper++
    
//   } while (helper <= maxNumber)

    
//   return arrayOfButtons
    
// }

//PROBANDO

// function ayudaDispatch(asd) {
//   if (asd === undefined) {
//     return dispatch(indexChoosen(asd))
//   }
// }

// function AllIndexesButtons() {
//   //let maxNumber = useSelector(state => state.allIndexes)
//   //let www = useSelector(state => state.allIndexes)
//   let www = asd
//   let maxNumber = www
//   let helper = 1
//   let arrayOfButtons = []
//   do {

//     arrayOfButtons.push( <button id={helper} key={helper}  onClick={() => ayudaDispatch()} >{helper}</button>)
//     helper++
    
//   } while (helper <= maxNumber)

    
//   return arrayOfButtons
    
// }

/* dispatch(indexChoosen(e)) */  
//let qq 

// function indexChoosenFunc(er) {
//   qq = er
//   return dispatch(indexChoosen(qq))
// }

//let asdd

// function savedIndexFunc() {
//   asdd = qq
//   //return asdd
//   return dispatch(indexChoosen(asdd))
// }

//const qwe = useSelector(state => state.indexChoosen)

// function Asddd() {
//   if (useSelector(state => state.indexChoosen) === undefined) {
//     //let ww = 0

//     //useEffect(() => {
//         dispatch(indexChoosen(0))
//     //}, []);
//     //});

//   } 
  
// }

// Asddd()

// let todos = useSelector(state => state.indexChoosen);

// console.log("TEST", todos)

//const customEqual = (oldValue, newValue) => oldValue === newValue
// const customEqual = (oldValue) => oldValue.payload

// // later
// const selectedData = useSelector(getIndexChoosen, customEqual)
// //const selectedData = useSelector((state) => )

// const CompletedTodosCounter = () => {
//   const numCompletedTodos = useSelector(indexChoosen())
//  return numCompletedTodos
// }

//const selectedData = useSelector(getIndexChoosen, shallowEqual)

// console.log("TTTEST", selectedData)
// console.log("asdasd", CompletedTodosCounter)
//const count = useSelector((state) => state.indexChoosen)

// console.log("TEST", count)
//console.log("TEST", useSelector(state => state.indexChoosen))

//console.log("*** ALL INDEXES FROM STORE", useSelector(asd => asd.indexChoosen))
//console.log("ALL INDEXES FROM STORE", selectedData)
//console.log("--- INDEX CHOOSEN FROM STORE", useSelector(state => state.indexChoosen))
//console.log("*** INDEX CHOOSEN FROM STORE", qwe)
//console.log("ABC INDEX CHOOSEN FROM STORE", useSelector(state => state.indexChoosen))

// const store = useStore()
// console.log("OTRO TEST MAS",store.getState())

  return (
    <div className='mainPagee'>   
   
      
      {/* AllIndexesButtons().map(e => (
      <button id={e} key={e}  onClick={() => dispatch(indexChoosen(e))} >{e}</button>

    )) */}
    

   
        

     <button id={1} key={1}  onClick={() => dispatch(setIndexChoosen(2))} >1</button>
     
      <button id={2} key={2}  onClick={() => dispatch(setIndexChoosen(4))} >4</button>

      <button id={3} key={3}  onClick={() => dispatch(getIndexChoosen())} >3</button>
     
     

      
          
      
    
    </div>
  );
}

export default Paginate;

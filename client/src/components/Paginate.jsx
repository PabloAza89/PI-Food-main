import React from "react";
import { useSelector , useDispatch } from 'react-redux';
import {setIndexChoosen } from '../actions';
import '../styles/Paginate.css';
import store from '../store/store';

function Paginate() {
  
  
  // FUNCIONA ES EL QUE VA !!!
  const indexChoosen = useSelector( state => state.indexChoosen )
  //console.log("INDICE ELEGIDO", indexChoosen )

  const allIndexes = useSelector( state => state.allIndexes )
  //console.log("ALL INDEXES", allIndexes )

//console.log("TEST LEFT", useSelector((state) => state.getIndexChoosen))
const dispatch = useDispatch()


function AllIndexesButtons() {
  let www = allIndexes
  let maxNumber = www
  let helper = 1
  let arrayOfButtons = []
  do {

    arrayOfButtons.push( helper)
    helper++
    
  } while (helper <= maxNumber)
  return arrayOfButtons
}


console.log("TESTTT", indexChoosen)
console.log("ALL INDEXES", allIndexes)



function colorChanger (value) {
  
    let qq = AllIndexesButtons().map(e => e - 1 )
    let ww = qq.filter(e => e !== value)
   
    document.getElementById(value).style.background='rgba(46, 230, 163, 0.377)'
    ww.forEach(e => document.getElementById(e).style.background='rgba(230, 46, 175, 0.363)')
}

  return (
    <div className='paginate' >
      
      { 
        AllIndexesButtons().map(e => (
        <button className="asd" id={e - 1} key={e - 1}  onClick={() => dispatch(setIndexChoosen(e - 1)) + colorChanger(e - 1) } >{e}</button>
        ))
      } 

    </div>
  );
}

export default Paginate;

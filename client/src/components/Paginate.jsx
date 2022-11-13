import React  , { /* useState, */ useEffect } from "react";
import { useSelector , useDispatch } from 'react-redux';
import { allIndexes , indexChoosen } from '../actions';
import '../styles/Paginate.css';


function Paginate() {

  

const dispatch = useDispatch()

const asd = useSelector(state => state.allIndexes)


function AllIndexesButtons() {
  //let maxNumber = useSelector(state => state.allIndexes)
  //let www = useSelector(state => state.allIndexes)
  let www = asd
  let maxNumber = www
  let helper = 1
  let arrayOfButtons = []
  do {

    arrayOfButtons.push(helper)
    helper++
    
  } while (helper <= maxNumber)

    
  return arrayOfButtons
  
    
}


console.log("INDEX CHOOSEN FROM STORE", useSelector(state => state.indexChoosen))
console.log("ALL INDEXES FROM STORE", useSelector(state => state.allIndexes))
  return (
    <div className='mainPagee'>   
      
      {AllIndexesButtons().map(e => (
        <button id={e} key={e}  onClick={() => dispatch(indexChoosen(e), AllIndexesButtons() )} >{e}</button>

      ))}
          
      
    
    </div>
  );
}

export default Paginate;

import React, { useState } from 'react';
import MainPage from './MainPage';
import LandingPage from './LandingPage';
import { useDispatch, useSelector , connect } from 'react-redux';
import { saveName } from './actions';

export default function App() {
  // const [useHook, setUseHook] = useState(true);
  // const [show, setShow] = useState(true);

  /* const dispatch = useDispatch() */

  function useEmployees() {
    return useSelector((state) => state.name)
  }
 

  //const componentShown = useHook ? <MainPage /> : <LandingPage />;

  return (
    <>
      <div>
        {console.log(useEmployees())}
        {/* <button onClick={() => setUseHook(prev => !prev)}>
          {`Change to ${useHook ? 'Class' : 'Hook'}`}
        </button>
        <button onClick={() => setShow(prev => !prev)}>
          {show ? 'Hide' : 'Show'}
        </button> */}
        {/* <button onClick={() => dispatch(saveName(true))}>XX</button> */}
      </div>
      {
        useEmployees() ? <MainPage /> : <LandingPage />
      }
    </>
  )
}
import React from 'react';
import MainPage from './components/MainPage';
import { useSelector } from 'react-redux';
//import LandingPage from './components/LandingPage';

export default function App() {
  function useShowMain() {
    return useSelector((state) => state.showMain)
  }

  return (
    <div className='main'>
      {/* { useShowMain() ?  <MainPage /> : <LandingPage />  } */}
      { useShowMain() ? <MainPage /> : <MainPage /> }
    </div>
  )
}
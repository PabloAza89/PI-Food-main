import React from 'react';
import MainPage from './components/MainPage';
import LandingPage from './components/LandingPage';
import { useSelector } from 'react-redux';

export default function App() {
  function useShowMain() {
    return useSelector((state) => state.name)
  }

  return (
    <div className='main'>
      { useShowMain() ? <MainPage /> : <LandingPage /> }
    </div>
  )
}
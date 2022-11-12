import '../styles/LandingPage.css';
import { useDispatch } from 'react-redux';
import { saveName } from '../actions';

function LandingPage() {
  const dispatch = useDispatch()
  return (
    <div >
      <div className='bgImageLanding'></div>
      <div className='landingContainer'>
        <h1 className='welcomeText'>Welcome ! bla bla bla</h1>
        <button className='welcomeButton' onClick={() => dispatch(saveName(true))} >ENTER</button>
      </div>
    </div>
  );
}

export default LandingPage;
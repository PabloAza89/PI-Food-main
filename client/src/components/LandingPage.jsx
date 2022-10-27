import './LandingPage.css';
import { useDispatch, useSelector , connect } from 'react-redux';
import { saveName } from '../actions';

function LandingPage() {

    const dispatch = useDispatch()

   
  return (
    <div className='landing'>
      <h1 className='welcomeText'>Welcome ! bla bla bla</h1>
      <button className='welcomeButton' onClick={() => dispatch(saveName(true))}>ENTER</button>
    </div >
  );
}

export default LandingPage;
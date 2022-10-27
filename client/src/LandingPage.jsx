import './LandingPage.css';
import { useDispatch, useSelector , connect } from 'react-redux';
import { saveName } from './actions';

function LandingPage() {

    const dispatch = useDispatch()

   
  return (
    <div className='main'>
        {/* <button className='welcomeButton'>V</button> */}
        <button onClick={() => dispatch(saveName(true))}>XXXX</button>
    </div >
  );
}

export default LandingPage;
import { fireEvent, render, screen } from '@testing-library/react';
import App from '../App.js';
import LandingPage from '../components/LandingPage.jsx';
//import MainPage from '../components/MainPage.jsx';

import * as redux from "react-redux";
//import * from 'react-redux';

describe('dispatch mock', function(){    
    it('should mock dispatch', function(){
            //arrange
            const useDispatchSpy = jest.spyOn(redux, 'useDispatch'); 
            const mockDispatchFn = jest.fn()
            useDispatchSpy.mockReturnValue(mockDispatchFn);

            //action
            const showMain = redux.useSelector( state => state.showMain )

            //assert
            expect(mockDispatchFn).toHaveBeenCalledWith(showMain);

            //teardown
            useDispatchSpy.mockClear();
    })
});
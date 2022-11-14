//import { indexChoosen } from "../actions";

const initialState = {
  showMain: false,
  left: false,
  right: false,
  indexChoosen: 0,
  allIndexes: 0,
  
}
  
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW_MAIN':      
      return {
        /* showMain: action.payload */
        
      }  
    
    case 'LEFT':
        return {
          /* left: action.payload */
        }
    case 'RIGHT':
        return {
          /* right: action.payload */
        }
    case 'ALL_INDEXES':
        return {
          allIndexes: action.payload
        }
    case 'SET_INDEX_CHOOSEN':

      return {
        ...state,
        indexChoosen: action.payload
      }
        
    case 'GET_INDEX_CHOOSEN': 
    return {
      ...state,
      response: console.log(state.indexChoosen)
    }
      
    default:
      return state
  }
};

export default reducer;


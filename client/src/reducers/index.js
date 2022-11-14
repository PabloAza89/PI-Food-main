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
    
    
    case 'LEFT':
        return {
          /* left: action.payload */
        }
    case 'RIGHT':
        return {
          /* right: action.payload */
        }
    case 'SET_SHOW_MAIN':      
        return {
          ...state,
          showMain: action.payload
        }    

    case 'SET_ALL_INDEXES':
      return {
        ...state,
        allIndexes: action.payload
      }
    case 'GET_ALL_INDEXES':
      return {
        ...state,
        response: console.log(state.allIndexes)
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


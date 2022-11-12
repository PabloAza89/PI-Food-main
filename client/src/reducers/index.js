const initialState = {
  showMain: false,
  left: false,
  right: false
}
  
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW_MAIN':
      return {
        showMain: action.payload
      };
    case 'LEFT':
        return {
          left: action.payload
        };
    case 'RIGHT':
        return {
          right: action.payload
        }    
    default:
      return state;
  }
};

export default reducer;


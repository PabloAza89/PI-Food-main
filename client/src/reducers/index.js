const initialState = {
  showMain: false
}
  
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW_MAIN':
      return {
        showMain: action.payload
      }
    default:
      return state;
  }
};

export default reducer;
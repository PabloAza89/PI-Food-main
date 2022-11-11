const initialState = {
    name: false
  }
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SHOW_MAIN':
          return {
            name: action.payload
          }
      default:
        return state;
    }
  };
  
  export default reducer;
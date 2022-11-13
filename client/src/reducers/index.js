const initialState = {
  showMain: false,
  left: false,
  right: false,
  allIndexes: 0,
  indexChoosen: 0
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
        };
    case 'ALL_INDEXES':
        return {
          allIndexes: action.payload
        };
    case 'INDEX_CHOOSEN':
        return {
          indexChoosen: action.payload
        };   
    default:
      return state;
  }
};

export default reducer;


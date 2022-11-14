// const saveName = (payload) => {
//   return { type: 'SHOW_MAIN', payload };
// };

// const left = (payload) => {
//   return { type: 'LEFT', payload };
// };

// const right = (payload) => {
//   return { type: 'RIGHT', payload };
// };
// const allIndexes = (payload) => {
//   return { type: 'ALL_INDEXES', payload}
// };
// const setIndexChoosen = (payload) => {
//   return { type: 'SET_INDEX_CHOOSEN', payload}
// };
// const getIndexChoosen = (payload) => {
//   return { type: 'GET_INDEX_CHOOSEN', payload}
// };

// module.exports = {
//   saveName,
//   left,
//   right,
//   allIndexes,
//   setIndexChoosen,
//   getIndexChoosen
// };

export function left() {
  return {
    type: 'LEFT',
  }
};

export function right() {
  return {
    type: 'RIGHT',
  }
};
export function allIndexes(asd) {
  return {
    type: 'ALL_INDEXES',
    asd
  }
};
export function setIndexChoosen(payload) {
  return {
    type: 'SET_INDEX_CHOOSEN',
    payload
  }
};
export function getIndexChoosen() {
  return {
    type: 'GET_INDEX_CHOOSEN'
  }
};
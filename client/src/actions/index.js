const saveName = (payload) => {
  return { type: 'SHOW_MAIN', payload };
};

const left = (payload) => {
  return { type: 'LEFT', payload };
};

const right = (payload) => {
  return { type: 'RIGHT', payload };
};
const allIndexes = (payload) => {
  return { type: "ALL_INDEXES", payload}
};
const indexChoosen = (payload) => {
  return { type: "INDEX_CHOOSEN", payload}
};

module.exports = {
  saveName,
  left,
  right,
  allIndexes,
  indexChoosen
};
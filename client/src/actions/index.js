const saveName = (payload) => {
  return { type: 'SHOW_MAIN', payload };
};

const left = (payload) => {
  return { type: 'LEFT', payload };
};

const right = (payload) => {
  return { type: 'RIGHT', payload };
};

module.exports = {
  saveName,
  left,
  right
};
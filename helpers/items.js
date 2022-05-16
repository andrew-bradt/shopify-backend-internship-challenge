const getItems = async() => {
  // TODO: Implement getItems with REPL.IT DB
  const items = require('../data/items');
  return items;
};

module.exports = {getItems};
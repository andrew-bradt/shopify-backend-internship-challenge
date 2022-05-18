const client = require('../config/db');

const getItems = async() => {
  const res = await client.getAll();
  const items = Object.values(res);
  delete items.deletions;
  return items;
};

const getItem = async(id) => {
  const res = await client.get(id);
  return res;
};

const deleteItem = async(id) => {
  try {
    await client.delete(id);
  } catch(err) {
    console.error(err.message);
  }
};

const addOrModifyItem = async(id, item) => {
  const res = await client.set(id, item);
};

module.exports = {getItems, getItem, deleteItem, addOrModifyItem};
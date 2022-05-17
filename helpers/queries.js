const client = require('../config/db');

const getItems = async() => {
  const res = await client.getAll();
  const items = Object.values(res);
  return items;
};

const addItem = async(item) => {
  
};

const getItemById = async(id) => {
  const res = await client.get(id);
  return res;
};

const deleteItemById = async(id) => {
  const res = await client.delete(id);
};

const modifyItemById = async(id, item) => {
  const res = await client.set(id, item);
};

module.exports = {getItems, addItem, getItemById, deleteItemById, modifyItemById};
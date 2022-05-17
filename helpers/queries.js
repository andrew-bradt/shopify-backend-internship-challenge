const client = require('../config/db');

const getItems = async() => {
  const res = await client.getAll();
  const items = Object.values(res);
  return items;
};

const addItem = async(item) => {
  client.set(item.id, item);
};

const getItemById = async(id) => {

};

const deleteItemById = async(id) => {

};

const modifyItemById = async(item) => {

};

module.exports = {getItems, addItem, getItemById, deleteItemById, modifyItemById};
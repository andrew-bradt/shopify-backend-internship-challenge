const client = require('../config/db');

const getItems = async() => {
  try {
    const res = await client.getAll();
    const items = Object.values(res);
    return items;
  } catch (err) {
    console.error(err.message);
  }
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
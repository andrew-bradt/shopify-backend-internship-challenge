// TODO: Implement all helpers with REPL.IT DB
const client = require('../config/db');

const GET_KEYS = async() => await client.list();

const getItems = async() => {
  const items = require('../data/items');
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

module.exports = {GET_KEYS, getItems, addItem, getItemById, deleteItemById, modifyItemById};
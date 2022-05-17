// TODO: Implement all helpers with REPL.IT DB
const client = require('../config/db');

const getItems = async() => {
  const items = require('../db/seeds');
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
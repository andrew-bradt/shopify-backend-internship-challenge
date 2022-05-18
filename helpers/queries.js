const client = require('../config/db');

const getItems = async() => {
  const data = await client.getAll();
  return data;
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

const addComment = async(id, comment, log) => {
  console.log('log: ', log);
  console.log('comment: ', comment);
  console.log('id: ', id);
  const newLog = `${log || ''}${id}: ${comment}\n`;
  await client.set('comments', newLog);
  
  return newLog;
};

module.exports = {getItems, getItem, deleteItem, addOrModifyItem, addComment};
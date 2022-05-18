const client = require('../config/db');

const getItems = async() => {
  const data = await client.getAll();
  return data;
};

const getComments = async() => {
  const data = await client.getAll();
  const {comments} = data;
  console.log(comments);
  return comments;
}

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

/* 
REPL.IT's DB only allows persistant key-value pairs with no separate collections, 
so a work-around is needed to persist Item and Comments while segmenting them.

This function will append a new string to the previous delete log, where a new-line 
is used as a delimiter for each entry
*/
const addComment = async(id, comment, log) => {
  const newLog = `${log || ''}${id}: ${comment}\n`;
  await client.set('comments', newLog);
  
  return newLog;
};

module.exports = {getItems, getItem, deleteItem, addOrModifyItem, addComment, getComments};
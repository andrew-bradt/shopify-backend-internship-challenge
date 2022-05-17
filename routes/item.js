const express = require('express');
const router = express.Router();
const {v4: uuidv4} = require('uuid');

const {getItem, addOrModifyItem, deleteItem} = require('../helpers/queries');

router.get('/:id', async(req, res) => {
  const {id} = req.params;
  const item = await getItem(id);
  res.render('item', item);
});

router.post('/', async(req, res) => {
  const id = uuidv4();
  const item = req.body;
  item.id = id;
  await addOrModifyItem(id, item);
  res.redirect('/');
});

router.put('/:id', async(req, res) => {
  const {id} = req.params
  const item = req.body;
  await addOrModifyItem(id, item);
  res.redirect('/');
});

router.delete('/:id', async(req, res) => {
  const {id} = req.params;
  await deleteItemById(id);
  res.redirect('/');
});

module.exports = router;

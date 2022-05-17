const express = require('express');
const router = express.Router();

const {getItemById, addItem, modifyItemById, deleteItemById} = require('../helpers/queries');

router.get('/:id', async(req, res) => {
  const {id} = req.params;
  const item = await getItemById(id);
  res.render('item', item);
});

router.post('/:id', async(req, res) => {
  const {id} = req.params;
  res.redirect('/');
});

router.put('/:id', async(req, res) => {
  const {id} = req.params;
  const item = req.body;
  const updatedItem = await modifyItemById(id, item);
  res.redirect('/');
});

router.delete('/:id', async(req, res) => {
  const {id} = req.params;
  await deleteItemById(id);
  res.redirect('/');
});

module.exports = router;

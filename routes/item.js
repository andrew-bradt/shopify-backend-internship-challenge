const express = require('express');
const router = express.Router();

const {getItemById, addItem, modifyItemById, deleteItemById} = require('../helpers/queries');

router.get('/:id', async(req, res) => {
  const {id} = req.params;
  res.render('item');
});

router.post('/:id', async(req, res) => {
  const {id} = req.params;
  res.redirect('/');
});

router.put('/:id', async(req, res) => {
  const {id} = req.params;
  res.redirect('/');
});

router.delete('/:id', async(req, res) => {
  const {id} = req.params;
  await deleteItemById(id);
  res.redirect('/');
});

module.exports = router;

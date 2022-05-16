const express = require('express');
const router = express.Router();

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
  res.redirect('/');
});

module.exports = router;

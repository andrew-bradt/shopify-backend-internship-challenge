const express = require('express');
const router = express.Router();

const {getItems} = require('../helpers/items.js');

/* GET home page. */
router.get('/', async(req, res, next) => {
  const items = await getItems();
  const templateVars = { items };
  res.render('index', templateVars);
});

module.exports = router;

const express = require('express');
const router = express.Router();

const {getItems} = require('../helpers/queries.js');
const {ONE_DAY_MS, inventoryCache, commentCache, isInventoryCurrent, setInventoryToCurrent} = require('../helpers/cache');

router.get('/', async(req, res) => {
  try {
    const templateVars = {};

    if (isInventoryCurrent()) {
      templateVars.items = inventoryCache.get('inventory');

    } else {
      const data = await getItems();
      const {comments, ...items } = data;
      
      inventoryCache.put('inventory', items, ONE_DAY_MS);
      commentCache.put('comments', comments, ONE_DAY_MS);
      templateVars.items = items;
    }
    
    res.render('index', templateVars);
    setInventoryToCurrent();
    
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = router;

const express = require('express');
const router = express.Router();

const {getItems} = require('../helpers/queries.js');
const {ONE_DAY_MS, itemCache, inventoryCache, isInventoryCurrent, setInventoryToCurrent} = require('../helpers/cache');

router.get('/', async(req, res) => {
  try {
    const templateVars = {};

    if (isInventoryCurrent()) {
      templateVars.items = inventoryCache.get('inventory');
      
    } else {
      const items = await getItems();
      inventoryCache.put('inventory', items, ONE_DAY_MS);
      templateVars.items = items;
    }
    
    res.render('index', templateVars);
    setInventoryToCurrent();
    
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = router;

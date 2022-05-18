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
      
      /* 
      Separate collections not possible with REPL.IT DB so comments and items must be coupled in DB
      use spread operator to segment after retrieving entire collection
      */
      const {comments, ...items } = data;
      
      inventoryCache.put('inventory', items, ONE_DAY_MS);
      commentCache.put('comments', comments, ONE_DAY_MS);
      templateVars.items = items;
    }
    
    res.render('index', templateVars);
    
    // Update state indicating inventory cache is up to date since it was just retrieved
    setInventoryToCurrent();
    
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = router;

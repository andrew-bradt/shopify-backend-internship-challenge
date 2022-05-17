const express = require('express');
const router = express.Router();
const {v4: uuidv4} = require('uuid');

const {getItem, addOrModifyItem, deleteItem} = require('../helpers/queries');
const {  
  ONE_DAY_MS,
  itemCache,
  inventoryCache,
  deleteCache,
  setInventoryToCurrent,
  setInventoryToStale 
} = require('../helpers/cache');

router.get('/:id', async(req, res) => {
  try {
    console.log(itemCache.keys());
    const {id} = req.params;
    const item = itemCache.get(id) || await getItem(id);

    itemCache.put(id, item, ONE_DAY_MS);
    res.render('item', item);
    
  } catch (err) {
    console.error(err.message);
  }
});

router.post('/', async(req, res) => {
  const id = uuidv4();
  const item = req.body;
  item.id = id;

  await addOrModifyItem(id, item);
  itemCache.put(id, item, ONE_DAY_MS);
  
  res.redirect('/');
});

router.put('/:id', async(req, res) => {
  const {id} = req.params
  const item = req.body;
  await addOrModifyItem(id, item);
  res.redirect('/');
});

router.delete('/:id', async(req, res) => {
  try {
    const {id} = req.params;
    await deleteItem(id);
    res.redirect('/');
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = router;

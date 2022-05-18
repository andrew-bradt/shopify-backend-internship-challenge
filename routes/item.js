const express = require('express');
const router = express.Router();
const {v4: uuidv4} = require('uuid');

const {getItem, addOrModifyItem, deleteItem, addComment} = require('../helpers/queries');
const { ONE_DAY_MS, itemCache, deleteCache, commentCache, setInventoryToStale } = require('../helpers/cache');

const updateComments = async(id, comment) => {
  commentCache.put(id, comment);
  const comments = commentCache.get('comments');
  const newLog = await addComment(id, comment, comments);
  commentCache.put('comments', newLog);
};

router.get('/:id', async(req, res) => {
  try {
    const {id} = req.params;
    const item = itemCache.get(id) || await getItem(id);

    itemCache.put(id, item, ONE_DAY_MS);
    res.render('item', item);
    
  } catch (err) {
    console.error(err.message);
  }
});

// When the DB is modified, update state to make sure that the inventoryCache isn't used for GET /  
router.use(setInventoryToStale);

router.delete('/:id', async(req, res) => {
  try {
    const {id} = req.params;
    const {comment} = req.body;
    const templateVars = {id, comment};
    
    await deleteItem(id);
    const deletedItem = itemCache.get(id);
    
    deleteCache.put(id, deletedItem);
    
    itemCache.del(id);

    updateComments(id, comment);

    res.render('undo-delete', templateVars);

  } catch (err) {
    console.error(err.message);
  }
});

router.post('/', async(req, res) => {
  try {
    const id = uuidv4();
    const item = req.body;
    item.id = id;

    await addOrModifyItem(id, item);
    itemCache.put(id, item, ONE_DAY_MS);

    res.redirect('/');
    
  } catch (err) {
    console.error(err.msg);
  }
});

router.put('/:id', async(req, res) => {
  try {
    const {id} = req.params
    const item = req.body;
    await addOrModifyItem(id, item);
    itemCache.put(id, item, ONE_DAY_MS);
    res.redirect('/');

  } catch (err) {
    console.error(err.message);
  }
});

router.post('/:id/undo-delete', async(req, res) => {
  const {id} = req.params;
  const item = deleteCache.get(id);

  try {
    await addOrModifyItem(id, item);
    deleteCache.del(id);
    updateComments(id, 'Undo Delete');
    
    res.redirect(`/item/${id}`);

  } catch (err) {
    console.error(err.message);
  }
});

module.exports = router;

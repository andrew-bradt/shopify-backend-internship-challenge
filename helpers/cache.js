const {Cache} = require('memory-cache');

const ONE_DAY_MS = 24 * 60 * 60 * 1000;

const itemCache = new Cache();
const inventoryCache = new Cache();
const deleteCache = new Cache();
const commentCache = new Cache();

/* 
Helper function for determining whether the inventoryCache is up-to-date or stale
Invoke setInventoryToStale when an item is added, modified or deleted
Invoke setInventoryToCurrent after a query has been made when retrieving entire inventory
*/
const trackInventoryCache = () => {
  let state = false;
  const isInventoryCurrent = () => state;

  const setInventoryToStale = (req, res, next) => {
    state = false;
    next();
  };
  
  const setInventoryToCurrent = () => {
    state = true;
  };
  
  return {isInventoryCurrent, setInventoryToCurrent, setInventoryToStale};
};

const {isInventoryCurrent, setInventoryToCurrent, setInventoryToStale} = trackInventoryCache();

module.exports = {
  ONE_DAY_MS,
  itemCache,
  inventoryCache,
  deleteCache,
  commentCache,
  isInventoryCurrent,
  setInventoryToCurrent,
  setInventoryToStale
};
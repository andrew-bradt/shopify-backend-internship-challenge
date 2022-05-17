const {Cache} = require('memory-cache');

const ONE_DAY_MS = 24 * 60 * 60 * 1000;
const itemCache = new Cache();
const inventoryCache = new Cache();
const deleteCache = new Cache();

const trackInventoryCache = () => {
  let state = true;
  const isInventoryCurrent = () => state;

  const setInventoryToStale = (req, res, next) => {
    state = false;
    next();
  };
  
  const setInventoryToCurrent = (req, res, next) => {
    state = true;
    next();
  };
  
  return {isInventoryCurrent, setInventoryToCurrent, setInventoryToStale};
};

const {isInventoryCurrent, setInventoryToCurrent, setInventoryToStale} = trackInventoryCache();

module.exports = {
  ONE_DAY_MS,
  itemCache,
  inventoryCache,
  deleteCache,
  isInventoryCurrent,
  setInventoryToCurrent,
  setInventoryToStale
};
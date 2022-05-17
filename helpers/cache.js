const {Cache} = require('memory-cache');

const ONE_DAY_MS = 24 * 60 * 60 * 1000;
const itemCache = new Cache();
const inventoryCache = new Cache();
const deleteCache = new Cache();

const trackInventoryCache = () => {
  let state = false;
  const isInventoryCurrent = () => state;
  const setInventoryToStale = () => state = false;
  const setInventoryToCurrent = () => state = true;
  
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
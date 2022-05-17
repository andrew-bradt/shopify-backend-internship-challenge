const {Cache} = require('memory-cache');

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
  itemCache,
  inventoryCache,
  deleteCache,
  isInventoryCurrent,
  setInventoryToCurrent,
  setInventoryToStale
};
'use strict';

const memoryStorage = require('./memory.js');
// temporary fix for local api spin up
// const fileStorage = require('./filesystem.js'); 
const mongoStorage = require('./mongo.js');

let dataStorageModule = {};

switch (process.env.STORAGE) {
  case 'filesystem':
    dataStorageModule = fileStorage;
    break;
  case 'mongo':
    dataStorageModule = mongoStorage;
    break;
  default:
    dataStorageModule = memoryStorage;
    break;
}

module.exports = dataStorageModule;

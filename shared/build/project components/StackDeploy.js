const Folder = require('../Folder');
const SofaStack = new Folder();
const sequelizeModelFile = require('./SequelizeModelFile');
const cap = require('../../capitalizeFirstLetter');

SofaStack.addModel = function(model){
  const sqlModelPath = './server/db/' + cap(model.name) + '.js';
  this.add(sqlModelPath, sequelizeModelFile(model));
  //todo Add routes;
};

module.exports = SofaStack;

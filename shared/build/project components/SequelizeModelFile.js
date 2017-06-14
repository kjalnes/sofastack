//import constructor;
const File = require('../File');
const cap = require('../../capitalizeFirstLetter');

const makeAttrSection = function(attrs){
  attrs = Array.from(attrs);
  attrs.toString = function(){
    let stuff = this.map((mod) => {
      return `  ${mod.name}: Sequelize.${mod.type}`;
    });
    return `const attrs = {
${stuff.join(',\n')}
};`;
  };

  return attrs;
};

const makeModelSection = function(name){
  name = {name};
  name.toString = function(){
    return `const ${cap(this.name)} = conn.define('${this.name}',attrs);

module.exports = ${cap(this.name)};`;
  };
  return name;
};

const req = File.makeSection(`const conn = require('./conn');
const Sequelize = require('sequelize');`);

const SequelizeModelFile = function({name = '', attrs = [], getters = [], setters = [], instanceMethods = [], classMethods = []}){

  return new File({req, attrs: makeAttrSection(attrs), model: makeModelSection(name)});
};

module.exports = SequelizeModelFile;

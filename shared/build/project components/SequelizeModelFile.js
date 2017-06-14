//import constructor;
const File = require('../File');
const cap = require('../../capitalizeFirstLetter');

const AttrSection = (function(){

  const mapAttr = function(){
    return this.data.map((mod) => {
      return `  ${mod.name}: Sequelize.${mod.type}`;
    });
  };
  const toString = function(){
    return `const attrs = {
${this.mapAttr().join(',\n')}
};`;
  };
  return File.makeSection(toString, {mapAttr});
}());

const ModelSection = (function(){
  const toString = function(){
    return `const ${cap(this.data.name)} = conn.define('${this.data.name}',attrs);

module.exports = ${cap(this.data.name)};`;
  };
  return File.makeSection(toString);
}());

const req = File.makeSection(`const conn = require('./conn');
const Sequelize = require('sequelize');`);

const SequelizeModelFile = function({name = '', attrs = [], getters = [], setters = [], instanceMethods = [], classMethods = []}){

  return new File({req, attrs: new AttrSection(attrs), model: new ModelSection({name})});
};

module.exports = SequelizeModelFile;

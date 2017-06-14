//import constructor;
const File = require('../File');
const cap = require('../../capitalizeFirstLetter');

const SequelizeModelFile = function({name, attrs, getters, setter, instanceMethods, classMethods}){
  const model = {name, toString: function(){
    return `const ${cap(this.name)} = conn.define('${this.name}',attrs);

module.exports = ${cap(this.name)};`;
  }
  };

  const req = File.makeSection(`const conn = require('./conn');
const Sequelize = require('sequelize');`);

  attrs.toString = function(){
    let stuff = this.map((mod) => {
      return `  ${mod.name}: Sequelize.${mod.type}`;
    });
    return `const attrs = {
${stuff.join(',\n')}
};`;

  };

  return new File({req, attrs, model});
};

module.exports = SequelizeModelFile;

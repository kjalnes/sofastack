const attrLine = require('./attrLine');
const capitalizeFirstLetter = require('../../capitalizeFirstLetter');

const sequelizeGenrator = ({name, attrs}) => {
  attrs = attrs.map(attrLine).join(`,\n`);
  return `const conn = require('./conn');
const Sequelize = require('sequelize');

const attrs = {
${attrs}
};

const ${capitalizeFirstLetter(name)} = conn.define('${name}',attrs);

module.exports = ${capitalizeFirstLetter(name)};`;
};

module.exports = sequelizeGenrator;

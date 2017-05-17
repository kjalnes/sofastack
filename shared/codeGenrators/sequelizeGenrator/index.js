const attrLine = require('./attrLine');

const sequelizeGenrator = ({name, attrs}) => {
  attrs = attrs.map(attrLine);
  attrs.join(',\n');
  return `const conn = require('./conn');
const attrs = {
${attrs}
};

const ${name} = dbInstance.define(${name},attrs)

module.exports = ${name};`;
};

module.exports = sequelizeGenrator;

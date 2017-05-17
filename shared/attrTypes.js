//types used for Attrs

const DATE = 'DATE';
const STRING = 'STRING';
const INTEGER = 'INTEGER';
const BOOLEAN = 'BOOLEAN';

const types = {
  DATE,
  STRING,
  INTEGER,
  BOOLEAN
};

module.exports = Object.assign({}, types, {default: types});

const conn = require('./conn');
const Sequelize = require('sequelize');

const attrs = {
  f: Sequelize.string
};

const F = conn.define('f',attrs);

module.exports = F;
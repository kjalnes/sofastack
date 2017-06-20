const conn = require('./conn');
const Sequelize = require('sequelize');

const attrs = {
  dasda: Sequelize.string
};

const Adsdas = conn.define('adsdas',attrs);

module.exports = Adsdas;
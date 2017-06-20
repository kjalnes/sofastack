const conn = require('./conn');
const Sequelize = require('sequelize');

const attrs = {
  asddas: Sequelize.string
};

const Adsasd = conn.define('adsasd',attrs);

module.exports = Adsasd;
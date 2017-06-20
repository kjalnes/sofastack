const conn = require('./conn');
const Adsasds = require('./Adsasd');

const sync = force => conn.sync({ force });

const seed = (force) =>  sync(force);

module.exports = {
  sync,
  seed,
  models: {
    Adsasds
  }
};
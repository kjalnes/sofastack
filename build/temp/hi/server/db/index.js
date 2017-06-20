const conn = require('./conn');
const Fs = require('./F');

const sync = force => conn.sync({ force });

const seed = (force) =>  sync(force);

module.exports = {
  sync,
  seed,
  models: {
    Fs
  }
};
const conn = require('./conn');
const Adsdass = require('./Adsdas');

const sync = force => conn.sync({ force });

const seed = (force) =>  sync(force);

module.exports = {
  sync,
  seed,
  models: {
    Adsdass
  }
};
const req = require('./require');
const capitalizeFirstLetter = require('../../capitalizeFirstLetter');

module.exports = (models) => {
  const reqStrs = models.map(model => req(model)).join('\n');
  const modelExports = models.map(model => capitalizeFirstLetter(model.name) + 's').join(',\n    ');
  return `const conn = require('./conn');
${reqStrs}

const sync = force => conn.sync({ force });

const seed = (force) =>  sync(force);

module.exports = {
  sync,
  seed,
  models: {
    ${modelExports}
  }
};`;
};

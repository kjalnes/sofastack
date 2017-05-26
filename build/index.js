const createCopy = require('./createCopy');
const makedb = require('./makedb');
const projectRoute = require('./projectRoute');

module.exports = ({name, models}) => {
  const route = projectRoute(name);
  return createCopy(name)
    .then(() => makedb(route, models))
    .then(() => route);
};

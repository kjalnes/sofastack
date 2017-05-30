const createCopy = require('./createCopy');
const makedb = require('./makedb');
const makeApi = require('./makeApiRoutes');
const projectRoute = require('./projectRoute');
const makePackageJson = require('./makePackageJson');
const makeZip = require('./makeZip');
module.exports = ({name, models}) => {
  const route = projectRoute(name);
  return createCopy(name)
    .then(() => makedb(route, models))
    .then(() => makeApi(route, models))
    .then(() => makePackageJson(route, name))
    .then(() => route)
    .then((folder) => makeZip(name, folder));
};

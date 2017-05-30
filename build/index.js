const createCopy = require('./createCopy');
const makedb = require('./makedb');
const makeApi = require('./makeApiRoutes');
const projectRoute = require('./projectRoute');
const makePackageJson = require('./makePackageJson');
const makeZip = require('./makeZip');

module.exports = ({name, models}) => {
  const projectFolder = projectRoute(name);
  return createCopy(name)
    .then(() => Promise.all([
      makedb(projectFolder, models),
      makeApi(projectFolder, models),
      makePackageJson(projectFolder, name)
    ]))
    .then(() => makeZip(name, projectFolder));
};

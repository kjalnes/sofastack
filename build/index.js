const createCopy = require('./createCopy');
const makedb = require('./makedb');
const makeApi = require('./makeApiRoutes');
const projectRoute = require('./projectRoute');
const makePackageJson = require('./makePackageJson');
const makeZip = require('./makeZip');
const path = require('path');
const fs = require('fs-extra');

module.exports = ({name, models}) => {
  const projectFolder = projectRoute(name);
  const zip = path.join(__dirname, 'zips', name + '.zip');
  return createCopy(name)
    .then(() => makedb(projectFolder, models))
    .then(() => makeApi(projectFolder, models))
    .then(() => makePackageJson(projectFolder, name))
    .then(() => makeZip(name, projectFolder))
    .then(() => ({
      projectFolder,
      zip,
      cleanup: () => Promise.all([fs.remove(projectFolder), fs.remove(zip)])
    }));
};

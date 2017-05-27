const apiRouteIndexGenerator = require('../shared/codeGenrators/apiRouteIndexGenerator');
const expressRouteGenerator = require('../shared/codeGenrators/expressRouteGenrator');
const fs = require('fs-extra');

const makeRouteFile = (projectRoute, modelName, contents) => fs.outputFile(
   projectRoute + '/server/routes/api/' + modelName + 's.js',
  contents
  );

module.exports = (projectRoute, models) => {
  const apiStr = apiRouteIndexGenerator(models);
  models = models.map( model => {
    return makeRouteFile(projectRoute, model.name, expressRouteGenerator(model));
  });

  models.push(fs.outputFile(
    projectRoute + '/server/routes/api/index.js',
    apiStr
  ));

  return Promise.all(models);
};

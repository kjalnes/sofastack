const dbIndexGenerator = require('../shared/codeGenrators/dbIndexGenerator');
const sequelizeRouteGenerator = require('../shared/codeGenrators/sequelizeGenrator');
const fs = require('fs-extra');
const cap = require('../shared/capitalizeFirstLetter');

const makeModelFile = (projectRoute, modelName, contents) => fs.outputFile(
   projectRoute + '/server/db/' + cap(modelName) + '.js',
  contents
  );
module.exports = (projectRoute, models) => {
  const dbIndexStr = dbIndexGenerator(models);
  models = models.map( model => {
    return makeModelFile(projectRoute, model.name, sequelizeRouteGenerator(model));
  });

  models.push(fs.outputFile(
    projectRoute + '/server/db/index.js',
    dbIndexStr
  ));

  return Promise.all(models);
};

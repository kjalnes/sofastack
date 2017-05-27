const dbIndexGenerator = require('../shared/codeGenrators/packageJsonGenerator');
const fs = require('fs-extra');
const cap = require('../shared/capitalizeFirstLetter');

const makeModelFile = (projectRoute, contents) => fs.outputFile(
   projectRoute + '/package.json',
  contents
  );
module.exports = (projectRoute, projectName) => {
  const str = dbIndexGenerator(projectName);
  return makeModelFile(projectRoute, str);
};

const archiver = require('archiver-promise');
const path = require('path');


module.exports = (name, projectPath) => {
  const zipFolder = path.join(__dirname, 'zips', name + '.zip');
  const zip = archiver(zipFolder, {
    store: true
  });

  zip.directory(projectPath, name);
  return zip.finalize().then(() => zipFolder);
};

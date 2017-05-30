const archiver = require('archiver-promise');
const path = require('path');
const fs = require('fs-extra');


module.exports = (name, projectPath) => {
  return fs.ensureDir(path.join(__dirname, 'zips'))
  .then(() => {
    const zipFolder = path.join(__dirname, 'zips', name + '.zip');
    const zip = archiver(zipFolder, {
      store: true
    });

    zip.directory(projectPath, name);
    return zip.finalize().then(() => zipFolder);
  });
};

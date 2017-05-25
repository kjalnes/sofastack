const fs = require('fs-extra');
const path = require('path');
module.exports = (name) => fs.emptyDir(path.join(__dirname, 'built projects', name))
.then(() => fs.remove(path.join(__dirname, 'built projects', name)))
.then(() => fs.copy(
  path.join(__dirname, 'static project'),
 path.join(__dirname, 'built projects', name)));

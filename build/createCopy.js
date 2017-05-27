const fs = require('fs-extra');
const projectRoute = require('./projectRoute');
const path = require('path');

module.exports = (name) => {
  const route = projectRoute(name);
  return fs.emptyDir(route)
.then(() => fs.remove(route))
.then(() => fs.copy(
  path.join(__dirname, 'static project'),
 route));
};

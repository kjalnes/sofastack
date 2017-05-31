const path = require('path');
const route =  (name) => path.join(__dirname, 'temp', name);
route.zip = (name) => path.join(__dirname, 'zips', name + '.zips');
module.exports = route;

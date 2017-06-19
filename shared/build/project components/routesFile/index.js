const File = require('../../File');
const cap = require('../../../capitalizeFirstLetter');
const get = require('./get');
const post = require('./post');
const put = require('./put');
const del = require('./delete');

const reqs =  File.makeSection(`const router = require('express').Router();
const db = require('../../db');`);

const routesToString = function() {
    const model = this.data;
    return `${get(model)}

${post(model)}

${put(model)}

${del(model)}
`
}

const routes = File.makeSection(routesToString);
const moduleExp = `module.exports = router;`;

const routesFile = function(model) {
    return new File({reqs, routes: new routes(model),  moduleExp});
}

module.exports = routesFile;

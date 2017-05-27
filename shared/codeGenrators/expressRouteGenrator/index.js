const get = require('./get');
const post = require('./post');
const put = require('./put');
const del = require('./delete');

module.exports = (model) => `const router = require('express').Router();
const db = require('../../db');

${get(model)}

${post(model)}

${put(model)}

${del(model)}

module.exports = router;
`;

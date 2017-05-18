const get = require('./get');
const post = require('./post');
const put = require('./put');
const del = require('./delete');

module.exports = (obj) => `const router = require('express').Router();
const db = require('../../db');

${get(obj)}

${post(obj)}

${put(obj)}

${del(obj)}

module.exports = router;
`;

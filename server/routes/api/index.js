const app = require('express').Router();
const zip = require('./zip');

app.use('/', zip );

module.exports = app;

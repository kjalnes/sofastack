const app = require('express').Router();
const zip = require('./zip');

app.use('/zip', zip );

module.exports = app;

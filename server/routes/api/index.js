const app = require('express').Router();
const zip = require('./zip');
const github = require('./github');

app.use('/zip', zip );
app.use('/github', github);
module.exports = app;

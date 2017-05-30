const app = require('express').Router();
const apiRoutes = require('./api');

app.use('/api', apiRoutes);

module.exports = app;

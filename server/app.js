const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./routes');
app.use(bodyParser.json({limit: '50mb'}));

app.use('/vendor', express.static(path.join(__dirname, '..', 'node_modules')));
app.use('/dist', express.static(path.join(__dirname, '..', 'dist')));
app.use('/assets', express.static(path.join(__dirname, '..', 'assets')));
app.get('/', (req, res, next) => res.sendFile(path.join(__dirname, '..', 'index.html')));
app.get('/index', (req, res, next) => res.sendFile(path.join(__dirname, '..', 'index.html')));
app.use('/', routes);

module.exports = app;

const app = require('express').Router();
const build = require('../../../build');

app.post('/', (req, res, next) => {
  const project = req.body;
  build(project)
  .then(({projectFolder, zip}) => {
    res.json({projectFolder, zip});
  });
});

app.get('/', (req, res, next) => {
  const {name} = req.query;
  const path = build.zip(name);
  res.download(path, name + '.zip', () => {
    build.cleanup(name);
  });
});

module.exports = app;

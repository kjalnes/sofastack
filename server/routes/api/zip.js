const app = require('express').Router();
const build = require('../../../build');

app.post('/', (req, res, next) => {
  const project = req.body;
  build(project)
  .then(({zip, cleanup}) => {
    res.download(zip, project.name + '.zip', () => {
      cleanup();
    });
  });
});

module.exports = app;

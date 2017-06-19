const app = require('express').Router();
const makeRepo = require('../../github/makeRepo');
// const build = require('../../../build');

app.post('/', (req, res, next) => {
  const project = req.body;
  const gitKey = req.session.keys.github;
  makeRepo(gitKey, project.name)
  .then(gitResponse => res.json(gitResponse));
  // build(project)
  // .then(({projectFolder, zip}) => {
  //   res.json({projectFolder, zip});
  // });
});

module.exports = app;

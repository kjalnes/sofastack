const app = require('express').Router();
const makeRepo = require('../../github/makeRepo');
const addFile = require('../../github/addFile');
// const build = require('../../../build');

app.post('/', (req, res, next) => {
  const project = req.body;
  console.log(req.session);
  const gitKey = req.session.keys.github;
  makeRepo(gitKey, project.name)
  .then((result) => {
    // res.json(result);
    // console.log(JSON.parse(result).full_name);
    return addFile(gitKey, result.full_name, 'test.js', '123')
    .then(gitresp => res.json(gitresp));

  });
  // build(project)
  // .then(({projectFolder, zip}) => {
  //   res.json({projectFolder, zip});
  // });
});

app.get('/', (req, res, next) => {
  console.log(req.session);
  res.json(req.session);
  // build(project)
  // .then(({projectFolder, zip}) => {
  //   res.json({projectFolder, zip});
  // });
});

module.exports = app;

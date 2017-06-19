const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./routes');

const session = require('express-session');

app.use(session({
  secret: 'i am lazy',
  name: 'cushion',
  resave: false,
  saveUninitialized: true
}));

//set up passport
const passport = require('passport');
var GitHubStrategy = require('passport-github').Strategy;

const gitConfig = process.env.GITHUB_URL ? {
  clientID: process.env.GITHUB_ID,
  clientSecret: process.env.GITHUB_SECRET,
  callbackURL: process.env.GITHUB_URL
} : require('../config');

passport.use(new GitHubStrategy(gitConfig,
  function(accessToken, refreshToken, profile, cb) {
    cb(null, accessToken);
  }
));

app.use(passport.initialize());

app.get('/auth/github',
  passport.authenticate('github', {scope: ['repo', 'repo_deployment', 'delete_repo']}));

app.get('/auth/github/callback',
  passport.authenticate('github', {
    failureRedirect: '/',
    session: false
  }),
  function(req, res) {
    req.session.keys = req.session.keys || {};
    req.session.keys.github = req.user;
    res.redirect('/');
  });

app.use(bodyParser.json({limit: '50mb'}));

app.use('/vendor', express.static(path.join(__dirname, '..', 'node_modules')));
app.use('/dist', express.static(path.join(__dirname, '..', 'dist')));
app.use('/assets', express.static(path.join(__dirname, '..', 'assets')));
app.get('/', (req, res, next) => res.sendFile(path.join(__dirname, '..', 'index.html')));
app.get('/index', (req, res, next) => res.sendFile(path.join(__dirname, '..', 'index.html')));
app.use('/', routes);

module.exports = app;

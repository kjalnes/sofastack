const createCopy = require('../../build/createCopy');
import {expect} from 'chai';
const fs = require('fs-extra');
const path = require('path');

describe('Create Copy', () => {
  beforeEach((done) => {
    createCopy('test')
  .then(() => done())
  .catch(done);
  });

  afterEach((done) => {
    fs.emptyDir(path.join(__dirname, '..', '..', 'build', 'built projects'))
  .then(() => done())
  .catch(done);
  });

  it('makes the parent folder as expected', (done) => {
    fs.pathExists(__dirname, '..', '..', 'build', 'built projects', 'test')
    .then(status => expect(status).to.be.true)
    .then(() => done())
    .catch(done);
  });

  it('has index.js', (done) => {
    fs.pathExists(__dirname, '..', '..', 'build', 'built projects', 'test', 'index.js')
    .then(status => expect(status).to.be.true)
    .then(() => done())
    .catch(done);
  });

});

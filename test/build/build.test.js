const build = require('../../build');
import {expect} from 'chai';
const fs = require('fs-extra');
const path = require('path');
import  {STRING, DATE} from '../../shared/attrTypes';

const testObj = {
  name: 'testProject',
  models: [
    {
      name: 'test',
      attrs: [
        {
          name: 'testString',
          type: STRING
        },
        {
          name: 'testDate',
          type: DATE
        }
      ]
    },
    {
      name: 'test2',
      attrs: [
        {
          name: 'testString',
          type: STRING
        },
        {
          name: 'testDate',
          type: DATE
        }
      ]
    }
  ]
};

describe('Build Project', () => {
  beforeEach((done) => {
    build(testObj)
  .then(() => done())
  .catch(done);
  });

  afterEach((done) => {
    fs.emptyDir(path.join(__dirname, '..', '..', 'build', 'built projects'))
  .then(() => done())
  .catch(done);
  });

  it('makes the parent folder as expected', (done) => {
    fs.pathExists(path.join(__dirname, '..', '..', 'build', 'built projects', 'testProject'))
    .then(status => expect(status).to.be.true)
    .then(() => done())
    .catch(done);
  });

  it('has index.js', (done) => {
    fs.pathExists(path.join(__dirname, '..', '..', 'build', 'built projects', 'testProject', 'index.js'))
    .then(status => expect(status).to.be.true)
    .then(() => done())
    .catch(done);
  });

  it('has db index', (done) => {
    fs.pathExists(path.join(__dirname, '..', '..', 'build', 'built projects', 'testProject', 'server', 'db', 'index.js'))
    .then(status => {
      return expect(status).to.be.true;
    }
      )
    .then(() => done())
    .catch(done);
  });

  it('has test model', (done) => {
    fs.pathExists(path.join(__dirname, '..', '..', 'build', 'built projects', 'testProject', 'server', 'db', 'Test.js'))
    .then(status => {
      return expect(status).to.be.true;
    }
      )
    .then(() => done())
    .catch(done);
  });

  it('has test2 model', (done) => {
    fs.pathExists(path.join(__dirname, '..', '..', 'build', 'built projects', 'testProject', 'server', 'db', 'Test2.js'))
    .then(status => {
      return expect(status).to.be.true;
    }
      )
    .then(() => done())
    .catch(done);
  });

  it('has db conn', (done) => {
    fs.pathExists(__dirname, '..', '..', 'build', 'built projects', 'test', 'server', 'db', 'conn.js')
    .then(status => expect(status).to.be.true)
    .then(() => done())
    .catch(done);
  });

});

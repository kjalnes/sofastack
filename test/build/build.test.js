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
    fs.emptyDir(path.join(__dirname, '..', '..', 'build', 'temp'))
    .then(() => fs.emptyDir(path.join(__dirname, '..', '..', 'build', 'zips')))
  .then(() => done())
  .catch(done);
  });

  it('makes the parent folder as expected', (done) => {
    fs.pathExists(path.join(__dirname, '..', '..', 'build', 'temp', 'testProject'))
    .then(status => expect(status).to.be.true)
    .then(() => done())
    .catch(done);
  });

  it('has index.js', (done) => {
    fs.pathExists(path.join(__dirname, '..', '..', 'build', 'temp', 'testProject', 'index.js'))
    .then(status => expect(status).to.be.true)
    .then(() => done())
    .catch(done);
  });

  it('has db index', (done) => {
    fs.pathExists(path.join(__dirname, '..', '..', 'build', 'temp', 'testProject', 'server', 'db', 'index.js'))
    .then(status => {
      return expect(status).to.be.true;
    }
      )
    .then(() => done())
    .catch(done);
  });

  it('has test model', (done) => {
    fs.pathExists(path.join(__dirname, '..', '..', 'build', 'temp', 'testProject', 'server', 'db', 'Test.js'))
    .then(status => {
      return expect(status).to.be.true;
    }
      )
    .then(() => done())
    .catch(done);
  });

  it('has test2 model', (done) => {
    fs.pathExists(path.join(__dirname, '..', '..', 'build', 'temp', 'testProject', 'server', 'db', 'Test2.js'))
    .then(status => {
      return expect(status).to.be.true;
    }
      )
    .then(() => done())
    .catch(done);
  });

  it('has db conn', (done) => {
    fs.pathExists(path.join(__dirname, '..', '..', 'build', 'temp', 'testProject', 'server', 'db', 'conn.js'))
    .then(status => expect(status).to.be.true)
    .then(() => done())
    .catch(done);
  });


  it('has api index', (done) => {
    fs.pathExists(path.join(__dirname, '..', '..', 'build', 'temp', 'testProject', 'server', 'routes', 'api', 'index.js'))
    .then(status => expect(status).to.be.true)
    .then(() => done())
    .catch(done);
  });

  it('has tests route', (done) => {
    fs.pathExists(path.join(__dirname, '..', '..', 'build', 'temp', 'testProject', 'server', 'routes', 'api', 'tests.js'))
    .then(status => expect(status).to.be.true)
    .then(() => done())
    .catch(done);
  });

  it('has test2s route', (done) => {
    fs.pathExists(path.join(__dirname, '..', '..', 'build', 'temp', 'testProject', 'server', 'routes', 'api', 'test2s.js'))
    .then(status => expect(status).to.be.true)
    .then(() => done())
    .catch(done);
  });

  it('has package json', (done) => {
    fs.pathExists(path.join(__dirname, '..', '..', 'build', 'temp', 'testProject', 'package.json'))
    .then(status => expect(status).to.be.true)
    .then(() => done())
    .catch(done);
  });

  it('make zips', (done) => {
    fs.pathExists(path.join(__dirname, '..', '..', 'build', 'zips', 'testProject.zip'))
    .then(status => expect(status).to.be.true)
    .then(() => done())
    .catch(done);
  });

  it('has obj as expected', (done) => {
    build(testObj)
    .then(({projectFolder, zip, cleanup}) => {
      expect(projectFolder).to.eq(path.join(__dirname, '..', '..', 'build', 'temp', 'testProject'));
      expect(zip).to.eq(path.join(__dirname, '..', '..', 'build', 'zips', 'testProject.zip'));
      expect(cleanup).to.be.a('function');
      done();
    })
    .catch(done);

  });
});

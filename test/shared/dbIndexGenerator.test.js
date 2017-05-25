import dbIndexGenerator from '../../shared/codeGenrators/dbIndexGenerator';
import {expect} from 'chai';

describe('dbIndexGenerator Genrator', () => {

  it('Makes Code As Expected', () => {
    const models = [{name: 'test'}, {name: 'test2'}];
    const generatedCode = dbIndexGenerator(models);
    const expected = `const conn = require('./conn');
const Test = require('./Test');
const Test2 = require('./Test2');

const sync = force => conn.sync({ force });

const seed = (force) =>  sync(force);

module.exports = {
  sync,
  seed,
  models: {
    Test,
    Test2
  }
};`;
    expect(generatedCode).to.equal(expected);
  });
});

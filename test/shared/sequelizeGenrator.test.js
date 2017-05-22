import sequelizeGenrator from '../../shared/codeGenrators/sequelizeGenrator';
import  {STRING, DATE, BOOLEAN, INTEGER} from '../../shared/attrTypes';
import {expect} from 'chai';

describe('Sequelize Genrator', () => {

  it('Makes Code As Expected', () => {
    const model = {
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
    };
    const generatedCode = sequelizeGenrator(model);
    const expected = `const conn = require('./conn');
const Sequelize = require('sequelize');

const attrs = {
  testString: Sequelize.STRING,
  testDate: Sequelize.DATE
};

const Test = dbInstance.define(test,attrs)

module.exports = Test;`;
    expect(generatedCode).to.equal(expected);
  });
});

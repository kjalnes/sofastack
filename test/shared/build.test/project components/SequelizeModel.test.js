import seq from '../../../../shared/build/project components/SequelizeModelFile';
import {expect} from 'chai';

describe('SequelizeModel', () => {
  it('Makes Code As Expected', () => {
    const model = {
      name: 'test',
      attrs: [
        {
          name: 'testString',
          type: 'STRING'
        },
        {
          name: 'testDate',
          type: 'DATE'
        }
      ]
    };
    const generatedCode = seq(model);
    const expected = `const conn = require('./conn');
const Sequelize = require('sequelize');

const attrs = {
  testString: Sequelize.STRING,
  testDate: Sequelize.DATE
};

const Test = conn.define('test',attrs);

module.exports = Test;`;

    expect(generatedCode.toString()).to.equal(expected);
  });

});

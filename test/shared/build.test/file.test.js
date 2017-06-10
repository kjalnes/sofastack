import File from '../../../shared/build/File';
import {expect} from 'chai';

describe('File', () => {

  it.only('can make headers', () => {
    const headers = {test: 'test', Test: 'test2'};
    const file = new File({headers});
    expect(file.getHeader()).to.eql(`const test = require('test');
const Test = require('test2');`);
  });

});

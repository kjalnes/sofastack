import File from '../../../shared/build/File';
import {expect} from 'chai';

describe('File', () => {

  it('can make headers', () => {
    const headers = {test: 'test', Test: 'test2'};
    const file = new File({headers});
    expect(file.getHeader()).to.eql(`const test = require('test');
const Test = require('test2');`);
  });


  it('can make file of only headers', () => {
    const headers = {test: 'test', Test: 'test2'};
    const file = new File({headers});
    expect(file.toString()).to.eql(`const test = require('test');
const Test = require('test2');`);
  });

  it('can do only imports', () => {
    const headers = {test: ['test', 'test2']};
    const file = new File({headers});
    expect(file.toString()).to.eql(`require('test');
require('test2');`);
  });

  it('can mix and match', () => {
    const headers = {test: ['test', 'test2'], test2: 'test2'};
    const file = new File({headers});
    expect(file.toString()).to.eql(`require('test');
require('test2');
const test2 = require('test2');`);
  });
});

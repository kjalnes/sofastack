import File from '../../../shared/build/File';
import {expect} from 'chai';

describe('File', () => {
  let file;

  beforeEach(() => {
    const reqs = {
      test: 'test',
      test2: 'test2'
    };

    reqs.toString = function(){
      let arr = [];
      for (let key in this){
        if (key !== 'toString'){
          arr.push(`const ${this[key]} = require('${this[key]}');`);
        }
      }
      return arr.join('\n');
    };

    const body = {toString: () => '123'};

    file = new File({reqs, body});

  });

  it('can make a file from the constructor', () => {
    expect(file.toString()).to.eql(`const test = require('test');
const test2 = require('test2');

123`);
  });

  it('can change deilm', () => {
    expect(file.toString('*')).to.eql(`const test = require('test');
const test2 = require('test2');*123`);
  });

  it('can edit section on the fly', () => {
    file.sections.reqs.test3 = 'test3';
    expect(file.toString()).to.eql(`const test = require('test');
const test2 = require('test2');
const test3 = require('test3');

123`);
  });

  it('can add sections', () => {
    file.addSection('test', {toString: () => 'abc'} );
    expect(file.toString()).to.eql(`const test = require('test');
const test2 = require('test2');

123

abc`);
  });

});

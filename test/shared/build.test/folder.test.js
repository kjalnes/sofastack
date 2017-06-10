import Folder from '../../../shared/build/Folder';
import {expect} from 'chai';

describe('Folder', () => {

  it('can add a file', () => {
    const folder = new Folder();
    folder.add('index.js', 'abc');
    expect(folder['index.js']).to.eql('abc');
  });

  it('can add a folder and add a file', () => {
    const folder = new Folder();
    folder.add('/test/index.js', 'abc');
    expect(folder.test).to.be.exist;
    expect(folder.test instanceof Folder).to.be.true;
    expect(folder.test['index.js']).to.eql('abc');
  });

  it('can add 2 folders and add a file', () => {
    const folder = new Folder();
    folder.add('/test/test2/index.js', 'abc');
    expect(folder.test).to.be.exist;
    expect(folder.test.test2).to.be.exist;
    expect(folder.test.test2['index.js']).to.eql('abc');
  });


  it('can delete a folder a file', () => {
    const folder = new Folder();
    folder.add('/test/index.js', 'abc');
    folder.delete('/test/index.js');
    expect(folder.test).to.be.exist;
    expect(folder.test['index.js']).to.not.exist;
  });

});

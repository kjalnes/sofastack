import Folder from '../../shared/build/Folder';
import {expect} from 'chai';

describe.only('Build Code', () => {
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
      expect(folder.test['index.js']).to.eql('abc');
    });

    it('can delete a folder a file', () => {
      const folder = new Folder();
      folder.add('/test/index.js', 'abc');
      folder.delete('/test/index.js');
      expect(folder.test).to.be.exist;
      expect(folder.test['index.js']).to.not.exist;
    });

  });
});

import types, {STRING, DATE, BOOLEAN, INTEGER} from '../../shared/attrTypes';
import {expect} from 'chai';

describe('Attr Types', () => {

  it('Gets Default As Expected', () => {
    const keys = Object.keys(types);
    expect(keys.length).to.be.greaterThan(3);
    expect(types.DATE).to.eql('DATE');
  });

  it('can be deconstructed', () => {
    expect(STRING).to.eql('STRING');
    expect(DATE).to.eql('DATE');
    expect(BOOLEAN).to.eql('BOOLEAN');
    expect(INTEGER).to.eql('INTEGER');
  });
});

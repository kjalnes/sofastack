import modelsReducer from '../../src/reducer/modelsReducer';
import {saveModel} from '../../src/actions/model';
import {expect} from 'chai';

//if you do async it might be better to do function instead of
//arrow to extend timeout
describe('Models Reducer', () => {

  it('Gets Default State', () => {
    const reducer = modelsReducer(undefined, {});
    expect(reducer).to.be.a('array');
    expect(reducer.length).to.equal(0);
  });

  it('can add a model', () => {
    let savedModel = saveModel({name: 'test', attrs: [
      {
        name: 'testAttr',
        type: 'string',
        id: '123'
      }
    ]});

    const reducer = modelsReducer(undefined, savedModel);
    expect(reducer.length).to.equal(1);
    expect(reducer[0].name).to.eql('test');
  });
});

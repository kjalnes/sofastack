import sofaStack from '../../../../shared/build/project components/StackDeploy';
import {expect} from 'chai';

describe('SofaStack', () => {
  it('can add a model', () => {
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
    sofaStack.addModel(model);
    expect(sofaStack.server.db['Test.js']).to.exist;
    expect(sofaStack.server.db['Test.js'].sections.attrs.data.length).to.eql(2);
  });
});

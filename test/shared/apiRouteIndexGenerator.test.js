import apiRouteIndexGenerator from '../../shared/codeGenrators/apiRouteIndexGenerator';
import {expect} from 'chai';

describe('api Route Index Genrator', () => {

  it('Makes Code As Expected', () => {
    const models = [{name: 'test'}, {name: 'test2'}];
    const generatedCode = apiRouteIndexGenerator(models);
    const expected = `const router = require('express').Router();
const testRoutes = require('./tests');
const test2Routes = require('./test2s');

router.use('/tests', testRoutes);
router.use('/test2s', test2Routes);

module.exports = router;`;
    expect(generatedCode).to.equal(expected);
  });
});

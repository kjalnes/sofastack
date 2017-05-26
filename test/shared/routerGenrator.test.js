import expressRouterGenrator from '../../shared/codeGenrators/expressRouteGenrator';
import {expect} from 'chai';

describe('Express Route Genrator', () => {

  it('Makes Code As Expected', () => {
    const model = {
      name: 'test',
      attrs: [

      ]
    };
    const generatedCode = expressRouterGenrator(model);
    const expected = `const router = require(\'express\').Router();\nconst db = require(\'../../db\');\n\nrouter.get(\'/\', (req, res, next) => {\n  db.models.Tests.findAll()\n  .then(objs => ( objs.length ? res.json(objs) : res.sendStatus(404)))\n  .catch(next);\n});\n\nrouter.get(\'/:id\', (req, res, next) => {\n  const {id} = req.params;\n  db.models.Tests.findById(id)\n  .then(obj => ( obj ? res.json(obj) : res.sendStatus(404)))\n  .catch(next);\n});\n\nrouter.post(\'/\', (req, res, next) => {\n  const {body} = req;\n  db.models.Tests.create(body)\n  .then(obj => ( obj ? res.status(201).json(obj) : res.sendStatus(404)))\n  .catch(next);\n});\n\nrouter.put(\'/:id\', (req, res, next) => {\n  const {id} = req.params;\n  const {body} = req;\n  db.models.Tests.findById(id)\n  .then(obj => {\n    if (!obj){\n      return res.sendStatus(404);\n    }\n    return obj.update(body)\n    .then(updatedobj => res.json(updatedobj));\n  })\n  .catch(next);\n});\n\nrouter.delete(\'/:id\', (req, res, next) => {\n  const {id} = req.params;\n  db.models.Tests.destroy({where: {id}})\n  .then(check => ( check ? res.sendStatus(204) : res.sendStatus(404)))\n  .catch(next);\n});\n\nmodule.exports = router;\n`;
    expect(generatedCode).to.equal(expected);
  });
});

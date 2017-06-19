const File = require('../File');

const reqs =  File.makeSection(`const router = require('express').Router();
const db = require('../../db');`);

const modelReq = ({name}) => `const ${name}Routes = require('./${name}s');`;

const modelReqStrs = (file) => {
    const models = file.sections.modelReqs.data
    return models.map(model => modelReq(model)).join('\n');
}
const modelReqs = File.makeSection(modelReqStrs);


const routerUse = ({name}) => `router.use('/${name}s', ${name}Routes);`;

const routerUseStrs = (file) =>  {
    const models = file.sections.modelReqs.data;
    return models.map(model => routerUse(model)).join('\n') + '\n\n' + 'module.exports = router;';
}

const routerUses = File.makeSection(routerUseStrs);

const serverIndexFile = function(models) {
    return new File({reqs, modelReqs: new modelReqs(models), routerUses: new routerUses()});
};

module.exports = serverIndexFile;

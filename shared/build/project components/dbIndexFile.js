//import constructor
const File = require('../File');
const cap = require('../../capitalizeFirstLetter');

const req = File.makeSection(`const conn = require('./conn');
const Sequelize = require('sequelize');`);

const modelImportsToString = function(){
  return this.data.map(model => `const ${cap(model.name)}s = require('./${cap(model.name)}');` ).join('\n');
};

const modelImports = File.makeSection(modelImportsToString);

const bodyToString = function(file){
    const models = file.sections.modelImports.data;
    const modelsStr = models.map(model => `        ${cap(model.name)}s`).join(',\n');
    return `const sync = force => conn.sync({ force });
const seed = (force) =>  sync(force);

module.exports = {
    sync,
    seed,
    models: {
${modelsStr}
};
`
}

const body = File.makeSection(bodyToString);

const dbIndexFile = function(models) {
    return new File({req, modelImports: new modelImports(models), body: new body()});
};

module.exports = dbIndexFile;

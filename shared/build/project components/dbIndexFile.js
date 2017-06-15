//import constructor
const File = require('../File');
const cap = require('../../capitalizeFirstLetter');

/* input:
models:  [{
    name:"sdfg"
    attrs: Array(1)
    id:"a684b908-142a-45d5-800b-5a9c335a3deb"
}]*/

const req = File.makeSection(`const conn = require('./conn');
const Sequelize = require('sequelize');`);


// const Model1 = require('./Model1')

const modelImportsToString = function(){
  this.data.map(model => `const ${cap(model.name)}s = require(./${cap(model.name)};` ).join('\n');
};

const modelImports = File.makeSection(modelImportsToString);

// const ReqModels = (function() {
//     console.log('this', this);
//     const modelsStr = function() {
//         return this.data.map( model => {
//             return `const ${cap(model.name)} = require(./${cap(model.nmae)}`
//         }).join('\n');
//     }

//     return File.makeSection(modelsStr, {modelsStr});
// }());

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
// const Body = (function() {
//     const modelsStr = function() {
//         return this.data.map( model => {
//             return `${cap(model.name)}s`
//         }).join('\n');
//     }

//     const toString = function() {
//         return `const sync = force => conn.sync({ force });
// const seed = (force) =>  sync(force);

// module.exports = {
//     sync,
//     seed,
//     models: {
//         ${modelsStr}
// }`
//     };

//     return File.makeSection(toString);
// }());

const dbIndexFile = function(models) {
    return new File({req, modelImports: new modelImports(models), body: new body()});
};

module.exports = dbIndexFile;

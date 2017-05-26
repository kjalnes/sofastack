const capitalizeFirstLetter = require('../../capitalizeFirstLetter');
module.exports = ({name}) => `const ${capitalizeFirstLetter(name)}s = require('./${capitalizeFirstLetter(name)}');`;

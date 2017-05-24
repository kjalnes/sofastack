const capitalizeFirstLetter = require('../../capitalizeFirstLetter');
module.exports = ({name}) => `const ${capitalizeFirstLetter(name)} = require('./${capitalizeFirstLetter(name)}');`;

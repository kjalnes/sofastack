const attrLine = ({name, type}) => {
  return `  ${name}: Sequelize.${type}`;
};

module.exports = attrLine;

const attrLine = ({name, type}) => {
  return ` ${name}: conn.Sequelize.${type}`;
};

module.exports = attrLine;

const capitalizeFirstLetter = require('../../capitalizeFirstLetter');
const del = ({name}) => {
  return `router.delete('/${capitalizeFirstLetter(name)}s/:id', (req, res, next) => {
  const {id} = req.params;
  db.models.${capitalizeFirstLetter(name)}s.destroy({where: {id}})
  .then(check => ( check ? res.sendStatus(204) : res.sendStatus(404)))
  .catch(next);
});`;
};

module.export = del;

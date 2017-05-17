const capitalizeFirstLetter = require('../../capitalizeFirstLetter');
const get = ({name}) => {
  return `router.delete('/${capitalizeFirstLetter(name)}/:id', (req, res, next) => {
  const {id} = req.params;
  db.models.Albums.destroy({where: {id}})
  .then(check => ( check ? res.sendStatus(204) : res.sendStatus(404)))
  .catch(next);
});`;
};

module.export = get;

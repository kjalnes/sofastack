const capitalizeFirstLetter = require('../../capitalizeFirstLetter');
const get = ({name}) => {
  return `router.get('/', (req, res, next) => {
  db.models.${capitalizeFirstLetter(name)}s.findAll()
  .then(objs => ( objs.length ? res.json(objs) : res.sendStatus(404)))
  .catch(next);
});

router.get('/:id', (req, res, next) => {
  const {id} = req.params;
  db.models.${capitalizeFirstLetter(name)}s.findById(id)
  .then(obj => ( obj ? res.json(obj) : res.sendStatus(404)))
  .catch(next);
});`;
};

module.exports = get;

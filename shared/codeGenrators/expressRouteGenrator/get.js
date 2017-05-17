const capitalizeFirstLetter = require('../../capitalizeFirstLetter');
const get = ({name}) => {
  return `router.get('/${name}s', (req, res, next) => {
  db.models.${capitalizeFirstLetter(name)}.findAll()
  .then(objs => ( objs.length ? obj.json(objs) : res.sendStatus(404)))
  .catch(next);
});

router.get('/${name}s/:id', (req, res, next) => {
  const {id} = req.params;
  db.models.${capitalizeFirstLetter(name)}.findById(id)
  .then(obj => ( obj ? obj.json(obj) : res.sendStatus(404)))
  .catch(next);
});`;
};

module.export = get;
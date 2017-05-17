const capitalizeFirstLetter = require('../../capitalizeFirstLetter');
const get = ({name}) => {
  return `router.post('/${name}s/:id', (req, res, next) => {
  const {body} = req;
  db.models.${capitalizeFirstLetter(name)}.create(body)
  .then(obj => ( obj ? res.status(201).json(obj) : res.sendStatus(404)))
  .catch(next);
});`;
};

module.export = get;

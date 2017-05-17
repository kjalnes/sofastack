const capitalizeFirstLetter = require('../../capitalizeFirstLetter');
const put = ({name}) => {
  return `router.put('/${capitalizeFirstLetter(name)}s/:id', (req, res, next) => {
  const {id} = req.params;
  const {body} = req;
  db.models.${capitalizeFirstLetter(name)}s.findById(id)
  .then(obj => {
    if (!obj){
      return res.sendStatus(404);
    }
    return obj.update(obj)
    .then(obj => res.json(obj));
  })
  .catch(next);
});`;
};

module.export = put;

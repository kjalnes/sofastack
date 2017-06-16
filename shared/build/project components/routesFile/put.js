const capitalizeFirstLetter = require('../../../capitalizeFirstLetter');
const put = ({name}) => {
  return `router.put('/:id', (req, res, next) => {
  const {id} = req.params;
  const {body} = req;
  db.models.${capitalizeFirstLetter(name)}s.findById(id)
  .then(obj => {
    if (!obj){
      return res.sendStatus(404);
    }
    return obj.update(body)
    .then(updatedobj => res.json(updatedobj));
  })
  .catch(next);
});`;
};

module.exports = put;

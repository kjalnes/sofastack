const router = require('express').Router();
const db = require('../../db');

router.get('/', (req, res, next) => {
  db.models.Adsasds.findAll()
  .then(objs => ( objs.length ? res.json(objs) : res.sendStatus(404)))
  .catch(next);
});

router.get('/:id', (req, res, next) => {
  const {id} = req.params;
  db.models.Adsasds.findById(id)
  .then(obj => ( obj ? res.json(obj) : res.sendStatus(404)))
  .catch(next);
});

router.post('/', (req, res, next) => {
  const {body} = req;
  db.models.Adsasds.create(body)
  .then(obj => ( obj ? res.status(201).json(obj) : res.sendStatus(404)))
  .catch(next);
});

router.put('/:id', (req, res, next) => {
  const {id} = req.params;
  const {body} = req;
  db.models.Adsasds.findById(id)
  .then(obj => {
    if (!obj){
      return res.sendStatus(404);
    }
    return obj.update(body)
    .then(updatedobj => res.json(updatedobj));
  })
  .catch(next);
});

router.delete('/:id', (req, res, next) => {
  const {id} = req.params;
  db.models.Adsasds.destroy({where: {id}})
  .then(check => ( check ? res.sendStatus(204) : res.sendStatus(404)))
  .catch(next);
});

module.exports = router;

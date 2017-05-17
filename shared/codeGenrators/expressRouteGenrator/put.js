router.put('/albums/:id/songs', (req, res, next) => {
  const {id} = req.params;
  const song = req.body.id;
  db.models.Albums.findById(id)
  .then(album => {
    if (!album){
      return res.sendStatus(404);
    }
    return album.addSong(song)
    .then( () => res.sendStatus(204));
  })
  .catch(next);
});

const capitalizeFirstLetter = require('../../capitalizeFirstLetter');
const put = ({name}) => {
  return `router.put('/albums/:id/songs', (req, res, next) => {
  const {id} = req.params;
  const song = req.body.id;
  db.models.Albums.findById(id)
  .then(album => {
    if (!album){
      return res.sendStatus(404);
    }
    return album.addSong(song)
    .then( () => res.sendStatus(204));
  })
  .catch(next);
});
`;
};

module.export = put;

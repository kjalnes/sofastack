const router = require('express').Router();
const fRoutes = require('./fs');

router.use('/fs', fRoutes);

module.exports = router;
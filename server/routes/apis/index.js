const expresss = require('express');
const v1ApiController = require('./v1');
let router = expresss.Router();
router.use('/v1', v1ApiController);
module.exports = router;
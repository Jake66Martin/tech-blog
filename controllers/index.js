const router = require('express').Router();
const homeroute = require('./homeroute');

router.use('/', homeroute);

module.exports = router;
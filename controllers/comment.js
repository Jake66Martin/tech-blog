const router = require('express').Router();

router.get('/', async (req, res) => {

  res.render('comment');

});

module.exports = router;
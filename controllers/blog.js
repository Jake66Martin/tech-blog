const router = require('express').Router();
const { Blog, User, Comments } = require('../models');


// router.get('/', async (req, res) => {

//   res.render('blog');
  

// });

router.get('/:id', async (req, res) => {
  try {
    const dbBlogData = await Blog.findByPk();

    const blog = dbBlogData.get({ plain: true })
      
    
    res.render('blog', {
      blog,
      loggedIn: req.session.loggedIn
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


module.exports = router;
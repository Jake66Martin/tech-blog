const router = require('express').Router();
const {Blog} = require('../models')

router.get('/', async (req, res) => {

  const myBlogs = await Blog.findAll()

  const blogData = myBlogs.map(data => data.get({ plain : true }));


  const filteredBlogs = blogData.filter(blog => blog.user_id === req.session.user_id);


  res.render('dashboard', {
    loggedIn: req.session.loggedIn,
    filteredBlogs
  });

});

router.post('/newblog', async (req, res) => {
  try {
    const newBlog = await Blog.create({
      title: req.body.title,
      content: req.body.content,
      user_id: req.session.user_id,
     
    });
    res.status(200).json(newBlog);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

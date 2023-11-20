const router = require('express').Router();
const { Blog , User } = require('../models');

router.get('/', async (req, res) => {
    try {
      const dbBlogData = await Blog.findAll({
        include: [
          {
            model: User,
            attributes: ['username']
          },
        ],
      });

  
      const blogs = dbBlogData.map((blogs) =>
        blogs.get({ plain: true })
      );

      const sessionData = req.session

      

      console.log(sessionData)

      res.render('homepage', {
        blogs,
        loggedIn: req.session.loggedIn,
        createdAt: req.session.createdAt
      });

      
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

  module.exports = router;
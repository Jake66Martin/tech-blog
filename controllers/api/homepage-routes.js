const router = require('express').Router();
const { Blog } = require('../../models');

router.get('/', async (req, res) => {
    try {
      const dbBlogData = await Blog.findAll({
        include: [
          {
            model: ,
            attributes: ['filename', 'description'],
          },
        ],
      });
  
      const galleries = dbGalleryData.map((gallery) =>
        gallery.get({ plain: true })
      );
      res.render('homepage', {
        galleries,
        loggedIn: req.session.loggedIn,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });
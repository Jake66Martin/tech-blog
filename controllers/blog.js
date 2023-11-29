const router = require('express').Router();
const { Blog, User, Comments } = require('../models');



router.get('/:id', async (req, res) => {
  try {
    const dbBlogData = await Blog.findByPk(req.params.id, {
      include: [
        {
          model : User,
          attribute: ["username"]
        }
  ]
});

    const newData = dbBlogData.get({ plain: true })

    console.log(newData)
      
    
    res.render('blog', {
      newData,
      loggedIn: req.session.loggedIn
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


module.exports = router;
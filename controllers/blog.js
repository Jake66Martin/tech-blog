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

    const dbCommentData = await Comments.findAll({
      include: [
        {
          model: User,
          attributes: ["username"],
        },
        {
          model: Blog,
          attributes: ["id"]
        }
      ],
    
    });

    const filteredComments = dbCommentData.filter(comment => comment.blog_id === newData.id);
    const comments = filteredComments.map(data => data.get({ plain : true }));

    sessionData = req.session.createdAt


      
    
    res.render('blog', {
      newData,
      comments,
      loggedIn: req.session.loggedIn,
      sessionData
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/", async (req, res) => {
  try {
    const dbBlogData = await Comments.findAll({
      include: [
        {
          model: User,
          attributes: ["username"],
        },
      ],
    
    });

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post('/newcomment', async (req, res) => {
  try {
    const newComment = await Comments.create({
    
      comment: req.body.comment, 
      user_id: req.session.user_id,
      blog_id: req.body.blog_id
      
      
     
     
    });
    res.status(200).json(newComment);
  } catch (err) {
    res.status(500).json(err);
  }
});



module.exports = router;
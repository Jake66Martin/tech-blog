const router = require('express').Router();
const { Blog, User, Comments } = require('../../models');






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
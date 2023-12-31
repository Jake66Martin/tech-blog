const router = require('express').Router();
const {Blog} = require('../../models')
const {User} = require("../../models")



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

const router = require("express").Router();
const { Blog, User } = require("../models");

router.get("/", async (req, res) => {
  try {
    const dbBlogData = await Blog.findAll({
      include: [
        {
          model: User,
          attributes: ["username"],
        },
      ],
    });

    const blogs = dbBlogData.map((blogs) => blogs.get({ plain: true }));

    const sessionData = req.session.createdAt
   
  
    

    res.render("homepage", {
      blogs,
      loggedIn: req.session.loggedIn,
      sessionData
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;

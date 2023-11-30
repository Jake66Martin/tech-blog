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

    


    const day = new Date().getDate()
    const month = new Date().getMonth() + 1;
    const year = new Date().getFullYear()

    const currentDay = `${day}/${month}/${year}`

    
     blogs.current = currentDay
   
  
  //  console.log(blogs)
    

    res.render("homepage", {
      blogs,
      loggedIn: req.session.loggedIn,
      currentDay
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;

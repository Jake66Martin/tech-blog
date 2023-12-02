const router = require("express").Router();
const { Blog, User, Comments } = require("../models");

const format = require('../utils/timestamp')


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

    const date = format(sessionData)

    res.render("homepage", {
      blogs,
      loggedIn: req.session.loggedIn,
      date
      
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/blog/:id', async (req, res) => {
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


    const sessionData = req.session.createdAt

    const date = format(sessionData)


      
    
    res.render('blog', {
      newData,
      comments,
      loggedIn: req.session.loggedIn,
      date
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/dashboard', async (req, res) => {

  const myBlogs = await Blog.findAll({
    include: [
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })

  const blogData = myBlogs.map(data => data.get({ plain : true }));


  const filteredBlogs = blogData.filter(blog => blog.user_id === req.session.user_id);


  const sessionData = req.session.createdAt

const date = format(sessionData)


  res.render('dashboard', {
    loggedIn: req.session.loggedIn,
    filteredBlogs,
    date
  });

});

router.get("/edit/:id", async (req, res) => {
  try {
    const dbBlogData = await Blog.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attribute: ["username"],
        },
      ],
    });

    const newData = dbBlogData.get({ plain: true });

    console.log(newData);

    const sessionData = req.session.createdAt

    const date = format(sessionData)

    res.render("edit", {
      newData,
      loggedIn: req.session.loggedIn,
      date
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/login', async (req, res) => {

  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');

});

module.exports = router;

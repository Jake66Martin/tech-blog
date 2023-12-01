const router = require("express").Router();
const {Blog} = require('../models')
const {User} = require('../models')

router.get("/:id", async (req, res) => {
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

    sessionData = req.session.createdAt;

    res.render("edit", {
      newData,
      loggedIn: req.session.loggedIn,
      sessionData,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


router.delete("/:id", async (req, res) => {
  try {
    const dbBlogData = await Blog.destroy({
     where: {
      id: req.params.id
     }
    
    });

    res.status(200).json({message: 'successfully deleted'})

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;

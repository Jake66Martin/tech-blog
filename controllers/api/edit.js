const router = require("express").Router();
const {Blog} = require('../../models')
const {User} = require('../../models')




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

router.put('/:id', async (req, res) => {
 try {
  const updateBlog =  Blog.update(
    {
      title: req.body.title,
      content: req.body.content,
      
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )

  res.status(200).json({message: 'successfully updated'})
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
const {Blog} = require('../models')

const ogBlog = 
    {
        title: 'The original blog!',
        content: `Hello! Welcome to my techblog site!
        This is the first blog to grace its halls. hopefully
        many more users join so that we may all come together as
        one big tech family!`,
        user_id: 1
    }


const blog = () => Blog.create(ogBlog);

module.exports = blog;
const {Comments} = require('../models')

const ogComment = 
    {
        title: 'The original comment!',
        comment: `Hello! Welcome to my techblog site!
        This is the first comment to grace its halls. hopefully
        many more users join so that we may all come together as
        one big tech family!`
    }


const comment = () => Comments.create(ogComment);

module.exports = comment;

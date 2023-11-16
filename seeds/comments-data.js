const {Comments} = require('../models')

const ogComment = 
    {
        title: 'The original comment!',
        comment: `Kudos to you my good sir!`
    }


const comment = () => Comments.create(ogComment);

module.exports = comment;

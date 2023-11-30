const {Comments} = require('../models')

const ogComment = 
    {
        
        comment: `Kudos to you my good sir!`
        

        
     
    }


const comment = () => Comments.create(ogComment);

module.exports = comment;

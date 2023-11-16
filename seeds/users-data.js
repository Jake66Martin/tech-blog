const {User} = require('../models')

const firstUser = 
    {
        username: 'jake66martin',
        email: 'jake66martin@hotmail.com',
        password: 'jacob'
    }


const user = () => User.create(firstUser);

module.exports = user;
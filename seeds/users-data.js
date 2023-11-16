const {User} = require('../models')

const firstUser = [
    {
        username: 'jake66martin',
        email: 'jake66martin@hotmail.com',
        password: '12345'
    }
]

const user = () => User.create(firstUser);

module.exports = user;
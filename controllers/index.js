const express = require('express');

const home = require('./homeroute');
const registration = require('./registration')
const login = require('./login')
const dash = require('./dashboard')
const comment = require('./comment')

const app = express()

app.use('/', home);
app.use('/registration', registration)
app.use('/login', login)
app.use('/dashboard', dash)
app.use('/comment', comment)

module.exports = app;
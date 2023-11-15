const express = require('express');

const users = require('./user-route')

const app = express()

app.use('/users', users)

module.exports = app;
const express = require('express');

const users = require('./user-route')
const blog = require('./blog')
const dashboard = require('./dashboard')
const edit = require('./edit')

const app = express()

app.use('/users', users)
app.use('/blog', blog)
app.use('/dashboard', dashboard)
app.use('/edit', edit)

module.exports = app;
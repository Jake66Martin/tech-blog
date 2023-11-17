const express = require('express');

const home = require('./homepage.js');
const dash = require('./dashboard.js')
const log = require('./log.js')
const api = require('./api')
const blog = require('./blog.js');


const app = express()

app.use('/', home);
app.use('/dashboard', dash)
app.use('/api', api)
app.use('/login', log)
app.use('/blog', blog)

module.exports = app;
const express = require('express');

const home = require('./homeroute.js');
const dash = require('./dashboard.js')
const api = require('./api')


const app = express()

app.use('/', home);
app.use('/dashboard', dash)
app.use('/api', api)

module.exports = app;
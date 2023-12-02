const express = require('express');

const home = require('./homepages.js');
const api = require('./api')


const app = express()

app.use('/', home);
app.use('/api', api)

module.exports = app;
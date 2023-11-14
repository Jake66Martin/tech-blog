const express = require('express');
// const router = require('express').Router();
const home = require('./homeroute');
const registration = require('./registration')
const login = require('./login')

const app = express()

app.use('/', home);
app.use('/registration', registration)
app.use('/login', login)

module.exports = app;
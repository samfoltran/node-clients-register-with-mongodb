const express = require('express')
const app = express()

const router = require('./routes/router.js')
app.use('/', router)

module.exports = app
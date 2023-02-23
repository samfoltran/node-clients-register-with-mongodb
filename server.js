const express = require('express')
const exphbs = require('express-handlebars')
const router = require('./routes/router.js')

const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use('/', router)

module.exports = app
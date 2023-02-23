const express = require('express')
const exphbs = require('express-handlebars')
const router = require('./routes/router.js')
require('./database/connection')

const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(
    express.urlencoded({
        extended: true
    })
)

app.use('/', router)

module.exports = app
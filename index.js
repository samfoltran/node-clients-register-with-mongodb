const app = require('./server')

app.listen(3000, error => {
    if(error) console.log(error)
})
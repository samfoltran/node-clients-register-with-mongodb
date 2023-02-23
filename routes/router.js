const express = require('express')
const router = express.Router();

router.get('/', (req, res) => {
    res.render('home')
})

router.get('/clients/create', (req, res) => {
    res.render('clients/create')
})

router.post('/clients/create', (req, res) => {
    
    const name = req.body.name
    const age = req.body.age
    const occupation = req.body.occupation

    console.log('ClientRegister Model not created.')
    console.log(`Data: {${name}, ${age}, ${occupation}}`)

    res.redirect('/')

})

module.exports = router
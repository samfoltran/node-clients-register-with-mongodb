const express = require('express')
const router = express.Router();

router.get('/teste', (req, res) => {
    res.send("Hello World Teste!")
})

router.get('/', (req, res) => {
    res.send("Hello World")
})

module.exports = router
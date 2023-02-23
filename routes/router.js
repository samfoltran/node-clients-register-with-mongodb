const express = require('express');
const ClientController = require('../controllers/ClientController');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('home')
})

router.get('/clients/create', ClientController.create)
router.post('/clients/insert', ClientController.insert)

module.exports = router
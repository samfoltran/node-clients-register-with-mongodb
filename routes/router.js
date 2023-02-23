const express = require('express');

const HomeController = require('../controllers/HomeController');
const ClientController = require('../controllers/ClientController');

const router = express.Router();

router.get('/', HomeController.index)

router.get('/clients/list', ClientController.list)
router.get('/clients/create', ClientController.create)
router.post('/clients/insert', ClientController.insert)
router.post('/clients/delete', ClientController.delete)
router.post('/clients/edit', ClientController.edit)
router.post('/clients/update', ClientController.update)

module.exports = router
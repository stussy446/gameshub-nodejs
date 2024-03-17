const express = require('express');
const socketController = require('../controllers/socketController');

const router = express.Router();

router.route('/').get(socketController.getRandomGame);

module.exports = router;

const express = require('express');
const socketController = require('../controllers/socketController');

const router = express.Router();

router.get('/', socketController.getRandomGame);

module.exports = router;

const express = require('express');
const viewsController = require('../controllers/viewsController');

const router = express.Router();

router.get('/', viewsController.getOverview);

router.get('/game', viewsController.getGame);

module.exports = router;

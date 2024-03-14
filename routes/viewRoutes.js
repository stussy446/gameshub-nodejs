const express = require('express');
const viewsController = require('../controllers/viewsController');

const router = express.Router();

router.get('/', viewsController.getOverview);

router.get('/addGame', viewsController.addGame);

router.get('/game/:id', viewsController.getGame);

router.get('/about', viewsController.getAbout);

module.exports = router;

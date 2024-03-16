const express = require('express');
const viewsController = require('../controllers/viewsController');

const router = express.Router();

router.get('/', viewsController.getAbout);

router.get('/addGame', viewsController.addGame);

router.get('/game/:id', viewsController.getGame);

router.get('/overview', viewsController.getOverview);

router.get('/random', viewsController.getRandom);

module.exports = router;

const express = require('express');
const gameController = require('../controllers/gameController');

const router = express.Router();

// game routes
router.route('/').get(gameController.getAllGames).post(gameController.addGame);

router
  .route('/:id')
  .get(gameController.getGame)
  .patch(gameController.updateGame)
  .delete(gameController.deleteGame);

module.exports = router;

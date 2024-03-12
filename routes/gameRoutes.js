const express = require('express');
const router = express.Router();
const gameController = require('./../controllers/gameController.js');

// game routes
router.route('/').get(gameController.getAllGames).post(gameController.addGame);

router
  .route('/:id')
  .get(gameController.getGame)
  .patch(gameController.updateGame)
  .delete(gameController.deleteGame);

module.exports = router;

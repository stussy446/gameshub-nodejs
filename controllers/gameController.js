const Game = require('../models/gameModel');

// *********
// GAME HANDLING
// ***
exports.getAllGames = async (req, res) => {
  try {
    const games = await Game.find();

    res.status(200).json({
      status: 'success',
      data: {
        games: games,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'failed',
      message: err.message,
    });
  }
};

exports.createGame = async (req, res) => {
  try {
    const newGame = await Game.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        game: newGame,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'failed',
      message: err.message,
    });
  }
};

exports.getGame = async (req, res) => {
  try {
    const game = await Game.findById(req.params.id);

    res.status(200).json({
      status: 'success',
      data: {
        games: game,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'failed',
      message: err.message,
    });
  }
};

exports.updateGame = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'Update game on this route',
  });
};

exports.deleteGame = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'delete game on this route',
  });
};

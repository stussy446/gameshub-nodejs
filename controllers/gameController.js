const Game = require('../models/gameModel');

// *********
// GAME HANDLING
// ***
exports.getAllGames = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      games: 'placeholder',
    },
  });
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

exports.getGame = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'Get specific game on this route',
  });
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

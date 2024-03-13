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

exports.updateGame = async (req, res) => {
  try {
    const game = await Game.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(201).json({
      status: 'success',
      game: game,
    });
  } catch (err) {
    res.status(404).json({
      status: 'failed',
      message: err.message,
    });
  }
};

exports.deleteGame = async (req, res) => {
  try {
    const game = await Game.findByIdAndDelete(req.params.id, {
      runValidators: true,
    });

    res.status(200).json({
      status: 'success',
      message: `${game.name} successfully deleted`,
    });
  } catch (err) {
    res.status(404).json({
      status: 'failed',
      message: err.message,
    });
  }
};

const Game = require('../models/gameModel');
const catchAsync = require('../utils/catchAsync');

exports.getOverview = catchAsync(async (req, res, next) => {
  // 1) Get game data from collection
  const games = await Game.find();
  // 2) Build Template

  // 3) Render template from game data
  res.status(200).render('overview', {
    title: 'All Games',
    games: games,
  });
});

exports.getGame = catchAsync(async (req, res) => {
  const game = await Game.findById(req.params.id);

  console.log(game);

  res.status(200).render('game', {
    game: game,
  });
});

exports.addGame = catchAsync(async (req, res) => {
  res.status(200).render('addGame');
});

exports.getAbout = catchAsync(async (req, res) => {
  res.status(200).render('about');
});

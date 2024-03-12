// game handling
exports.getAllGames = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      games: 'placeholder',
    },
  });
};

exports.addGame = (req, res) => {
  res.status(201).json({
    status: 'success',
    data: {
      placeholder: 'add games on this route',
    },
  });
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

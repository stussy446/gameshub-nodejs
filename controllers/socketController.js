const catchAsync = require('../utils/catchAsync');
const client = require('../socket');

exports.getRandomGame = catchAsync(async (req, res) => {
  const randomGame = client.write('name', (err) => {
    if (err) console.log(err.message);
  });

  res.status(200).json({
    status: 'success',
    data: {
      randomGame: randomGame,
    },
  });
});

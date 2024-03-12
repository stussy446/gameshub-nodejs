const express = require('express');
const morgan = require('morgan');

// router imports
const gameRouter = require('./routes/gameRoutes');

// initializes express application
const app = express();

// middleware configuration
app.use(morgan('dev'));
app.use(express.json());
app.use('/games', gameRouter);

app.get('/', (req, res) => {
  res.status(200).send('hello from game server!');
});

module.exports = app;

const express = require('express');
const morgan = require('morgan');
const path = require('path');

// router imports
const gameRouter = require('./routes/gameRoutes');

// initializes express application
const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// view engine configuration
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// logging configuration
app.use(morgan('dev'));

// Routes
app.use('/games', gameRouter);
app.get('/', (req, res) => {
  res.status(200).render('base', {
    tour: 'The Forest Hiker',
    user: 'Steve',
  });
});

app.get('/', (req, res) => {
  res.status(200).send('hello from game server!');
});

module.exports = app;

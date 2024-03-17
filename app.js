const express = require('express');
const morgan = require('morgan');
const path = require('path');

// router imports
const gameRouter = require('./routes/gameRoutes');
const viewRouter = require('./routes/viewRoutes');
const socketRouter = require('./routes/socketRoute');

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
app.use('/', viewRouter);
app.use('/games', gameRouter);
app.use('/randomGame', socketRouter);

app.get('/', (req, res) => {
  res.status(200).render('base', {
    tour: 'The Forest Hiker',
    user: 'Steve',
  });
});

module.exports = app;

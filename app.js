const express = require('express');
const morgan = require('morgan');

// initializes config and application settings
const app = express();

// middleware configuration
app.use(morgan('dev'));
app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send('hello from game server!');
});

module.exports = app;

/* eslint-disable import/no-extraneous-dependencies */
const mongoose = require('mongoose');

// Game Schema and Model
const gameSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A game must have a name'],
    unique: true,
  },
  rating: {
    type: Number,
    default: 7.0,
  },
  length: {
    type: Number,
    required: [true, 'A game must have a length'],
  },
});

const Game = mongoose.model('Game', gameSchema);

module.exports = Game;

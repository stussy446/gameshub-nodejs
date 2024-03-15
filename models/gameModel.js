/* eslint-disable import/no-extraneous-dependencies */
const mongoose = require('mongoose');

// Game Schema and Model
const gameSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A game must have a name'],
    unique: true,
    trim: true,
  },
  rating: {
    type: Number,
    default: 7.0,
    required: [true, 'A game must have a rating'],
  },
  length: {
    type: Number,
    required: [true, 'A game must have a length'],
  },
  platform: {
    type: [String],
    default: ['PC'],
    trim: true,
  },
  image: {
    type: String,
    default: '/img/logo.png',
  },
});

const Game = mongoose.model('Game', gameSchema);

module.exports = Game;

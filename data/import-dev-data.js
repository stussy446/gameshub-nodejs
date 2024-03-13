/* eslint-disable import/no-extraneous-dependencies */
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const fs = require('fs');
const Game = require('../models/gameModel');

dotenv.config();

let { DATABASE } = process.env;
DATABASE = DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);

mongoose.connect(DATABASE).then(() => {
  console.log('DB Connection successful');
});

// READ JSON FILE
const games = JSON.parse(fs.readFileSync(`${__dirname}/games.json`, 'utf-8'));

// IMPORT DATA INTO DB
const importData = async () => {
  try {
    await Game.create(games);
    console.log(`data successfully loaded`);
    process.exit();
  } catch (err) {
    console.log(err);
  }
};

// DELETE ALL DATA FROM COLLECTION
const deleteData = async () => {
  try {
    await Game.deleteMany();
    console.log(`deletion successful!`);
    process.exit();
  } catch (err) {
    console.log(err);
  }
};

if (process.argv[2] === '--import') {
  importData();
} else if (process.argv[2] === '--delete') {
  deleteData();
}

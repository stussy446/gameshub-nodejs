/* eslint-disable import/no-extraneous-dependencies */
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const app = require('./app');

dotenv.config();

const { PORT } = process.env;

let { DATABASE } = process.env;
DATABASE = DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);

mongoose.connect(DATABASE).then(() => {
  console.log('DB Connection successful');
});

// Has application listen on specified port
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});

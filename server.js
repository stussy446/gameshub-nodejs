/* eslint-disable import/no-extraneous-dependencies */
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const app = require('./app');

// enables usage of variables from .env file
dotenv.config();
const { PORT } = process.env;
let { DATABASE } = process.env;

DATABASE = DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);

//connects to Database specified in .env file
mongoose.connect(DATABASE).then(() => {
  console.log('DB Connection successful');
});

// Has application listen on specified port
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});

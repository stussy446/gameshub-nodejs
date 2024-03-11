const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.get('/', (req, res) => {
  res.status(200).send('hello from game server!');
});
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});

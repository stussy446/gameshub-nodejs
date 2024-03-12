const dotenv = require('dotenv').config();
const app = require('./app.js');

const PORT = process.env.PORT;

// Has application listen on specified port
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});

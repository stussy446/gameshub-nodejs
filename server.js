const dotenv = require('dotenv');
const app = require('./app');

dotenv.config();

const { PORT } = process.env;

// Has application listen on specified port
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});

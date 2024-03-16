const dotenv = require('dotenv');
const net = require('net');

dotenv.config();
const { SOCKETPORT, HOST } = process.env;

// connects to partners microservice through socket
let client = new net.Socket();

client.connect(SOCKETPORT, HOST, () => {
  console.log(`connected via socket to ${HOST}:${SOCKETPORT}`);
});

module.exports = client;

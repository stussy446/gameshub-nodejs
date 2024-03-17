const dotenv = require('dotenv');
const net = require('net');

dotenv.config();
const { SOCKETPORT, HOST } = process.env;

// connects to partners microservice through socket
let client = new net.Socket();
client.connect(SOCKETPORT, HOST, () => {
  console.log(`connected via socket to ${HOST}:${SOCKETPORT}`);
});

client.on('close', () => {
  console.log('connection closed');
});

client.on('error', () => {
  console.log('error with connection');
});

client.on('end', () => {
  console.log('all done!');
});

module.exports = client;

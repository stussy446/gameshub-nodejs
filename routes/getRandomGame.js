const express = require('express');
const client = require('../public/js/socket');

const router = express.Router();

router.get('/', (req, res) => {
  client.on('data', (data) => {
    console.log(`DATA FROM SOCKET: ${data}`);
    res.render('random', {
      randomGame: data,
    });
  });
});

module.exports = router;

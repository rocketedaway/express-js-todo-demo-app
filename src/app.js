const express = require('express');

const app = express();

// GET / - Returns a simple "Hello Randy" greeting
app.get('/', (req, res) => {
  res.send('Hello Randy');
});

module.exports = app;

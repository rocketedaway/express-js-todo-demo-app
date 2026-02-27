const express = require('express');

const app = express();

// GET / - Returns a simple "Hello World" greeting
app.get('/', (req, res) => {
  res.send('Hello World');
});

module.exports = app;

const express = require('express');

const app = express();

let counter = 0;

app.get('/api/getCounter', (req, res) => {
  counter++;
  res.send({
    counter,
  });
});

app.listen(5000);
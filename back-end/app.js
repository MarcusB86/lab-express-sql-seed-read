const express = require('express');
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
  res.send('Tuner App, Let us get in tune');
});

module.exports = app
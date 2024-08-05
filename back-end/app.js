const express = require('express');
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
  res.send('Tuner App, Let us get in tune');
});

const songController = require("./controllers/songController.js")
app.use("/song", songController);

app.get("*", (req, res) => {
    res.status(404).send("Page not found")
})

module.exports = app
const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;
const instructors = require('./data/instructors.json');

app.use(cors());

app.get("/", (req, res) => {
  res.send("The Instructors is running");
});

app.get('/instructors', (req, res) => {
    res.send(instructors);
});

app.listen(port, () => {
  console.log(`The Instructors listening on port ${port}`);
});

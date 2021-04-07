const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require("dotenv").config();

console.log('I am here')

const PORT = process.env.PORT || 3000;
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('./public'));

app.get('/oauth',  (req, res) => {
  res.send("You are signed");
});

app.get("/", (req, res) => {
  res.render("index.html");
})

mongoose
  .connect(process.env.MONGODB_URI,{
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log('Up'));
  })
  .catch((e) => console.log(e));

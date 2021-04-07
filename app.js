const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

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

mongoose
  .connect('mongodb://localhost:27017/auth', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log('Up'));
  })
  .catch((e) => console.log(e));

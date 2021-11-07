const express = require("express");
const app = express();
const path = require("path");

app.use(express.urlencoded());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.post('/', (req, res) => {
  res.render("Hola " + req.body);
});

app.listen(3000, () => console.log('Listening on port 3000!'));


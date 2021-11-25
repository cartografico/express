const express = require("express");
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.send('hola sumercé')
});

console.log(path.basename)

app.listen(3000, () => console.log('Listening on port 3000!'));
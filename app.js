const express = require("express");
const app = express();


app.get('/user/:name', (req, res) => {
  let name = req.params.name;
  res.send(`<h1>Hola ${name.charAt(0).toUpperCase() + name.slice(1)}!</h1>`);
})

app.listen(3000, () => console.log('Listening on port 3000!'));


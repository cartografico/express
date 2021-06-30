const express = require("express");
const app = express();

app.listen(3000, () => console.log('Listening on port 3000!'));

app.get('/user/:name', (req, res) => {
  let name = req.params.name;
  name.toString();
  res.send('Hola ' + name.charAt(0).toUpperCase() + name.slice(1));
})



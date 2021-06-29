const express = require("express");
const app = express();

app.listen(3000, () => console.log('Listening on port 3000!'));

app.get('/', (req, res) => {
  let nombre = req.query.nombre;
  if (nombre) {
    res.send(`<h1>Hola ${nombre}</h1>`);
  } else {
    res.send(`<h1>Hola desconocido!</h1>`);
  }

});


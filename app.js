const express = require("express");
const app = express();

app.get('/', (req, res) => {
  let number;
  for (number = 0; number < 50; number++ ){
    console.log(`<h1>${number} es par!</h1>`);
  }
});

app.listen(3000, () => console.log('Listening on port 3000!'));


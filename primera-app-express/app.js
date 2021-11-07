const express = require("express");
const app = express();

app.use(express.static(__dirname + '/public'));

// app.use(express.static('public'));



// app.get('/', (req, res) => {
//   app.use(express.static("public"))
// });

app.listen(3000, () => console.log('Listening on port 3000!'));
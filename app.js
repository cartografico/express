const express = require("express");
const app = express();


app.get('/', (req, res) => {
    const datos = req.headers['sec-ch-ua'];
    res.send(datos)
    console.log(datos);
});


app.listen(3000, () => console.log('Listening on port 3000!'));
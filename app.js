const express = require("express");
const app = express();


app.get('/', (req, res) => {
    const datos = req.headers['user-agent'];
    res.send(datos)
    console.log(datos);
});


app.listen(3000, () => console.log('Listening on port 3000!'));
const express = require('express');
const app = express();


app.get('/', (req, res)=>{
    const user = req.query.name
    res.send("Hola " + user);

});

app.listen(3000, ()=>{
    console.log("Escuchando el puerto 3000!")
})
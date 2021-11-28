const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.set("view engine", "pug");

app.get("/", (req, res, next) => {
    res.render('index' );
    next();
});
function capitalizeFirstLetter(str) {
    return str[0].toUpperCase() + str.slice(1);
}

app.post('/',(req, res,next) => {
    const username = req.body.name;
    const text = capitalizeFirstLetter(username);
    const nombre = text;
    res.render('response', { name: nombre, empty:" " });
    console.log(nombre)
    next()
})

app.listen(3000, () => console.log("Listening on port 3000!"));
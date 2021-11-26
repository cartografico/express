const express = require("express");
const app = express();
const bodyParser = require('body-parser')

// const path = require("path");

app.set("view engine", "pug");

app.get("/", (req, res) => {
    res.render('index' );
});

app.listen(3000, () => console.log("Listening on port 3000!"));

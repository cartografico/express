const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.set("view engine", "pug");

app.get("/", (req, res, next) => {
    res.render('index' );
    next();
});

app.post('/',(req, res,next) => {
    const username = req.body.name;
    res.render('response', { name: username });
    next()
})


app.listen(3000, () => console.log("Listening on port 3000!"));
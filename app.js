const express = require("express");
const app = express();
const useragent = require('express-useragent');

app.use(useragent.express());
app.get('/', function(req, res){
    res.send(req.useragent.browser);
});

app.listen(3000, () => console.log('Listening on port 3000!'));
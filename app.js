const express = require('express');
const app = express();
const mongoose = require('mongoose');
const MONGODB_URI = process.env.MONGODB_URL;
const date = Date()


// mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost:27017/Visitors', { useNewUrlParser: true });
mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost:27017/Visitors', { useNewUrlParser: true });

mongoose.connection.on('error', err => {
    console.log(err);
    
  }, console.log('Conexión exitosa'));

app.get('/', (req, res)=>{
    let user = req.query.user;

    if (user == undefined){
        user = "Anónimo";
    } else {
        user = req.query.user + "";
    }

    const schema = mongoose.Schema({
        date: Date,
        name :{
            type: String,
            default : "Anónimo",
        }  
    });
    const Visitor =  mongoose.models.Visitor || mongoose.model('Visitor', schema);
    Visitor.create({date : date, name : user}, function(err) {
        if (err) return console.error(err)});
        
    res.send(`<h1>El visitante fue almacenado con éxito</h1>`);

    Visitor.find(function(err, Visitors) {
        if (err) return console.error(err);
        console.log(Visitors);
      })
});


app.listen(3000, ()=>{
    console.log("Escuchando el puerto 3000!")
});
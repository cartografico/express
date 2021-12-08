const express = require('express');
const app = express();
const mongoose = require('mongoose');
const MONGODB_URI = process.env.MONGODB_URL;
const date = Date()

mongoose.connect('mongodb://127.0.0.1:27017/test', 
{ useNewUrlParser: true })


mongoose.connection.on('error', err => {
    console.log(err);
  });

app.get('/', (req, res)=>{
    const user = req.query.user + "";

    if (!user){
        user = "Anónimo"
    }
    const schema = mongoose.Schema({
        date: Date,
        name : String ,
    });
    

    const Visitor =  mongoose.models.Visitor || mongoose.model('Visitor', schema);

    Visitor.create({date : date, name : user})

    console.log('Tutto a posto')
});



app.listen(3000, ()=>{
    console.log("Escuchando el puerto 3000!")
});
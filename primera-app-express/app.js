'use strict';

const gatos = [
    {
        id : 1,
        nombre: "Jim",
    },
    {
        id: 2,
        nombre : "Dante"
    },
    {
        id:3,
        nombre: "Olivia"
    },
];

const weight = [
    {
        id : 1,
        weight: 7,
    },
    {
        id: 2,
        weight : 4.8,
    },
    {
        id:3,
        weight: 3.5,
    },
];
const id = 3;
const getCat = (id, callback) =>{
    const cat = gatos.find( (e) =>{
        return e.id === id;
    })?.nombre;

    if (cat){
        callback (null, cat);
    } else {
        callback (`ERROR`);
    }
};
getCat(id, (err, cat) => {
    if (err){
        console.log("error en la consulta")
        return console.log(err)
    }  
    return console.log(cat);
    }   
);

const getWeigth = (id, callback) =>{
    const gato = weight.find((e)=>{
        if (e.id === id){
            return e.id;
        };
    })?.weight;

    if (gato) {
        callback (null,gato);
    } else {
        callback ("No hay michi");
    };
};

getWeigth(id, (err, weight)=>{
    if (err){
        return console.log(err)
    }
    return console.log(weight)
});
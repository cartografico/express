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

const getCat = (id) =>{
    const cat = gatos.find( (e) =>{
        return e.id === id;
    });
    return cat;
};

console.log(getCat(2));
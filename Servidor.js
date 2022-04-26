const newContenedor = require('./Clases/Contenedor')
const express = require('express');
const { error } = require('console');

const newProduct = new newContenedor.Contenedor('./productos.txt'); 



const app = express(); 
const PORT = 8080; 


const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando el puerto ${server.address().port}`);
})
server.on("erorr", error => console.log(`Error en el servidor ${error}`)); 

app.get('/productos', (req,res) =>{
    newProduct.GetAll();
})
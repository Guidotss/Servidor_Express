const newContenedor = require('./Clases/Contenedor')
const express = require('express');


const newProduct = new newContenedor.Contenedor('./productos.txt'); 



const app = express(); 
const PORT = 8080; 


const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando el puerto ${server.address().port}`);
})
server.on("erorr", error => console.log(`Error en el servidor ${error}`)); 

app.get('/productos', (req,res) =>{
    res.send(newProduct.GetAll().then(prod => `<p>${prod}</p>`))    
})
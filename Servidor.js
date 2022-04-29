const newContenedor = require('./Clases/Contenedor')
const express = require('express');

const newProduct = new newContenedor.Contenedor('./productos.txt'); 


const app = express(); 
const PORT = 8080; 


const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando el puerto ${server.address().port}`);
})
server.on("erorr", error => console.log(`Error en el servidor ${error}`)); 

app.get('/', (req, res) => {
  res.send(`<p>Nombre de las rutas: /productos y /productoRandom</p>`)
})

app.get('/productos', (req, res) => {
  
  newProduct.GetAll().then(prod =>res.send(`<strong>${JSON.stringify(prod,null,2)}</strong>`))
})

app.get('/productoRandom', (req,res) => {
  let numRandom = Math.floor((Math.random() * (6 - 3 + 1)) + 3); 
  newProduct.GetById(numRandom).then(prod => res.send(`<strong>${JSON.stringify(prod,null,2)}</strong>`))
})



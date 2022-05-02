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
  
  newProduct.GetAll().then(prod =>res.send({prod}))
})

app.get('/productoRandom', (req,res) => {
  newProduct.GetAll()
  .then(
    prod => {
      let productsID = prod.map(e => e.id);
      let min = Math.min(...productsID);
      let max = Math.max(...productsID);
      let idRandom = Math.floor((Math.random() * (max - min+1)) + min)
      res.send(prod[idRandom -1]);
    }
  )
})

  




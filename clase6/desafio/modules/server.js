const express = require('express');
const app = express();

const Container = require('./Container')
const ProductoDTO = require('./ProductoDTO')

/**
 * 
 * Middlewares
*/

app.use(express.json())
app.use(express.text())
app.set('json spaces' , 40) ;


let createProducto = data =>{
    return new ProductoDTO(data);
}


let creatorData = async (prodFront)=>{
    
    let data = new Container('productos');
        data.save(prodFront);
        
    let value = await data.getAll();

    return value

}


let reqListenerProductos = async (req,res) =>{

    let object = createProducto({title:'test',price:123,thumbnail:'link.com'});
    
    let data = await creatorData(object);

    res.json(data);
}




/**
 * 
 * Routes | OPTIONAL crear usando ROUTER
*/

app.get('/productos', reqListenerProductos) ; 
// app.get('/productoRandom',)



module.exports = app;
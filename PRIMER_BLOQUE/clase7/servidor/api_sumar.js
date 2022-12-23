const express = require('express');
const { read, rmSync } = require('fs');
const app = express();

/**
 * Agregado de una ruta en este caso las voy a usar dictandolo desde:
 * 
 * 
*/

// ROUTER
const opRouter = express.Router();

opRouter.use((req,res,next)=>{
    console.log(req.ip);
    next();
})



opRouter.get('/sumar', (req,res)=>{
    let query = req.query

    query= Object.values(query)
    
    let suma = query.reduce( (a,b) => a+parseInt(b),0)
    res.json({suma})
    res.end()

})

opRouter.get('/sumar/:num1/:num2', (req,res) =>{
    let num1 = req.params.num1
    let num2 = req.params.num2
    let suma = parseInt(num1) + parseInt(num2)
    res.json({suma})
    res.end()
})

opRouter.get('/operacion/:data',(req,res)=>{
    let data = req.params.data
    
    data = data.split('+').reduce( (a,b) => a + parseInt(b),0);

    if(NaN){
        res.status(400).send('Hay algo raro!')
        return
    }
    
    res.json({data})
    res.end()

    
})



// USANDO EL ROUTER
// MIDDLEWARE
path = '/api'


app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(path,opRouter)

app.get(path,
    (req,res) =>{
        res.status(200).json({msg:`ok  req.method` })
    })

app.put(path,
    (req,res) =>{
        res.status(200).json({msg:`ok  req.method` })
    })

app.delete(path,
    (req,res) =>{
        res.status(200).json({msg:`ok  req.method` })
    })



module.exports = app ;
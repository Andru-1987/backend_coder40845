const exp = require('constants');
const express = require('express');
const app = express();
const path = require('path')
const {Router} = express;


const personas = [];
const mascotas = [];


const mascotasRouter = Router()
const personasRouter = Router()


mascotasRouter.use(express.json())
personasRouter.use(express.urlencoded({extended:'utf-8'}))



mascotasRouter.get('/',
    (req,res)=>{
        res.json({mascotas})
        res.end()
    }
)


mascotasRouter.post('/',
    (req,res)=>{
        let {mascota} = req.body
        personas.push(mascota)
        res.json({mascotas})
        res.end()
    }
)





personasRouter.get('/',
    (req,res)=>{
        res.json({personas})
        res.end()
    }
)


personasRouter.post('/',
    (req,res)=>{
        let {persona} = req.body
        personas.push(persona)
        res.json({personas})
        res.end()
    }
)




app.use(express.json())
app.use(express.urlencoded({extended:'utf-8'}))

app.use('/personas',personasRouter);
app.use('/mascotas',mascotasRouter);

app.use('/data/',express.static(path.join(__dirname,'public')))

console.log(path.join(__dirname,'public'));

app.listen(
    5000,
    'localhost',
    ()=> console.log(`http://localhost:5000`)
)




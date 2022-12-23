const express = require('express');
const app = express();
const PORT = 5000
const HOST = 'localhost'


arrayPersonas=[

    { 
        nombre:'anderson',
        apellido: 'ocaña',
        edad: 35
    },
    { 
        nombre:'lourdes',
        apellido: 'achaval lastra',
        edad: 40
    }
]



arrayMascotas=[

    { 
        nombre:'Java',
        raza: 'Felino',
        edad: 35
    },
    { 
        nombre:'T-D',
        raza: 'Fox Terrier',
        edad: 40
    }
]



const mascotasRoute = express.Router();
pathMascotas = '/mascotas'


mascotasRoute.get('',
    (req,res)=>{
        res.json({arrayMascotas})
    }
)


mascotasRoute.post('',
    (req,res)=>{

        let {mascota} = req.body;
        arrayMascotas.push(mascota);

        console.log({data:arrayMascotas,status:200,method:req.method});
        res.json({arrayMascotas})
    }
)

const personasRoute = express.Router();
pathPersonas = '/personas'

personasRoute.get('',
    (req,res)=>{
        console.log({data:arrayPersonas,status:200});
        res.json({arrayPersonas})
    }
)


personasRoute.post('',
    (req,res)=>{

        let {persona} = req.body;
        arrayPersonas.push(persona);

        console.log({data:arrayPersonas,status:200,method:req.method});
        res.json({arrayPersonas})
    }
)


app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(pathMascotas,mascotasRoute)
app.use(pathPersonas,personasRoute)


app.listen(PORT,HOST,()=>console.log(`http://${HOST}:${PORT}`))






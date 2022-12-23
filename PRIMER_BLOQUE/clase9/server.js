const express = require('express');
const app = express();
const fs = require('fs')
const path = require('path')

const PORT = 8000
const HOST = 'localhost'


app.engine('ntl', (filePath , options , callback)=>{

    fs.readFile(filePath, (e,content)=>{
        if(e) return callback(new Error(e))
        let rendered = content.toString()
                .replace('#title#', `<h1>${options.title}</h1>`)
                .replace('#msg#', `<h1>${options.msg}</h1>`)
        return callback(null , rendered)
    })
})


// pathFolder = path.join(__dirname + '/views')

app.set('views', './clase9/views') //nos va a indicar el directorio de las vistas

app.set ('view engine', 'ntl') // registra el motor de plantillas


app.get('/inicio', (req,res)=>{

        console.log('hello');
        res.render('index', {title:'Esto es una page',msg:'con sus respectivos templates'})
        
    
})

app.listen(PORT, HOST,()=>console.log(`Server is up at port: ${PORT}`))
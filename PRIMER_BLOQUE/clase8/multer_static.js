const express = require('express');
const multer = require('multer');
const path = require('path')
const app = express();
const controlador = require('./upload_controller')

const PORT = 5000
const HOST = 'localhost'

const public = path.join(__dirname + 'public')


app.get('/public', (req,res)=>{
    res.sendFile(path.join(public,'index.html' ))
})


app.post('/upload',
    controlador.upload,
    controlador.uploadFile)

// app.use('/public',express.static(public))
app.listen(PORT,HOST,()=> console.log(`Serving at : ${HOST}:${PORT}`))

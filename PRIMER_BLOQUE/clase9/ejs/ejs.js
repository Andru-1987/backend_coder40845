const express = require('express')
const path = require('path')
const app = express()
const PORT = 3000
const HOST = 'localhost'

const bd=[]


app.use(express.json())
app.use(express.urlencoded({extended:'utf-8'}))

// usando static files

app.use('/static' , express.static(path.join(__dirname , 'static')))

app.set('views' , './clase9/ejs/views')
app.set('engine','ejs')


// app.get('/',(req,res)=>{
//     data = req.query
//     res.render('index.ejs',data)
// })


app.get('/', (req,res)=>{
    bd.sort((a,b) => a.edad-b.edad)
    res.render('formulario.ejs',{bd})
})

app.post('/personas',(req,res)=>{
    
    bd.push(req.body)
    res.redirect('/')
    
})


app.listen(PORT,HOST,()=>{
    console.log(`SERVING AT 🚀 http://${HOST}:${PORT}`);
})


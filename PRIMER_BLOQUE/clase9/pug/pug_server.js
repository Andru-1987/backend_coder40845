const express = require('express')
const path = require('path')
const app = express()
const PORT = 3000
const HOST = 'localhost'


app.use(express.json())
app.use(express.urlencoded({extended:'utf-8'}))

// usando static files

app.use('/static' , express.static(path.join(__dirname , 'static')))

app.set('views' , './clase9/pug/views')
app.set('engine','pug')


app.get('/datos',(req,res)=>{
    query_values = req.query
    res.render('query.pug',query_values)
})

app.listen(PORT,HOST,()=>{
    console.log(`SERVING AT 🚀 http://${HOST}:${PORT}`);
})


// datos?min=10&nivel=15&max=20&titulo=<i>Medidor</i>
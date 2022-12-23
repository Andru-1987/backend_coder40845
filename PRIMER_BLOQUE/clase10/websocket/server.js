const express = require('express')
const path = require('path')
const app = express()
const   PORT = 3001,
        HOST = 'localhost'


app.use(express.static(path.join(__dirname,'public')))

app.get('', (req,res)=>{
    res.render('./index.html')
})

app.listen(PORT,HOST,()=>console.log(`SERVING AT 🚀 http://${HOST}:${PORT}`))
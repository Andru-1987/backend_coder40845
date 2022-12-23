const express = require('express')
const app = express()
const fs = require('fs')
const path = require('path')


const PORT = 3000
const HOST = 'localhost'


const replacer = (data,options) =>{

    let values = data

    const props = ['settings','_locals','cache']
    
    for let value of 
    (e => delete values[e])

    console.log(values);

    return data
}


app.engine('cte', (fPath, options,cb)=>{   
    fs.readFile(fPath,(e,content)=>{

        if (e) return cb(new Error (e))
        let data = content.toString('utf8')

        let rendered = replacer(data,options)
        
                        
        return cb(null,rendered)
    })  

} )


app.set('views','./clase9/motor_custom/templates')
app.set('view engine','cte')



app.get('/',(req,res)=>{
    console.log('Starting to change the data');

    ctx = {
        titulo:'Nuevo valor',
        mensaje:'Este es un mensaje secreto',
        autor:'By Anderson',
        version:'1.0'
    }

    res.render('index',ctx)
})

app.listen(PORT, HOST,()=>console.log(`Server is up at port: ${PORT}`))
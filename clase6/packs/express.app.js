const express = require('express');
const path = require('path') ;
const app = express();
const session = require('express-session');
const moment = require('moment');

let url = path.join(__dirname,'..','public');

app.use('/',express.static (url)) // obteniendo con un archivo html en public
app.use( session({
    secret:'blackcat',
    resave:true,
    saveUninitialized:false,
    cookie:{}
}))

// app.get('/',(req,res)=>{
//     res.send('<h1>Hola mundo! :D</h1>');
    
// })


const reqListenerVisitas = (req,res) =>{

    let toPrint = `<h1>Cantidad de visitas: ${req.session.views}</h1>`
    let sessionInit = 'Nueva sesion!'

    if(req.session.views){
        req.session.views++ ;
        res.write(  toPrint );
        res.end();
    }
    else{
        req.session.views = 1;
        res.end(sessionInit)

    }

}


app.set('json spaces',40);

const reqListenerFyH = (req,res) =>{
    let fyh = moment().format('DD/MM/YYYY HH:mm:ss')
    res.json({fyh});
}

app.get('/visitas', reqListenerVisitas)


app.get('/fyh',reqListenerFyH)


module.exports = app
/*

    Clase #6
    Servidores Web

    Importamos express, es un minimal web framework for building Restful API

    creando nuestro primer server

    se procede a instalar Nodemon y Express
    con la linea de comando npm i nodemon express -D
    para el manejo de sesiones : sessions  npm i express-session -D
    
*/


const PORT = process.env.PORT || 3000 ;
const EXPRESS_PORT = process.env.PORT || 8080;

const HOST = 'localhost' ;
const http_server = require('./packs/http.app');
const express_server = require('./packs/express.app')

// usando http
// http_server.listen( PORT , HOST, ()=> console.log(`Server at port ${PORT}`))
// usando express

express_server.listen(EXPRESS_PORT,()=>{ console.log(`Server at port http://localhost:${EXPRESS_PORT}`)})





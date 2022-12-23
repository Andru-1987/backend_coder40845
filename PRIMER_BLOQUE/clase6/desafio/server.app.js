/**
 * 
 * Servidor con Express
 * 
*/

const PORT = process.env.PORT || 8080
const HOST = process.env.HOST || 'localhost'

const server = require('./modules/server')


server.listen( PORT, HOST ,
    () =>console.log(`Server at port http://${HOST}:${PORT}`)
)

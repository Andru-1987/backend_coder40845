const WebSocket = require('ws')
const http = require('http')
const   PORT = 3000,
        HOST = 'localhost'


// se crea una instancioa del servidor HTTP
const server = http.createServer();

// se levanta un servidor, usando la instancia de servidor

const wsServer = new WebSocket.Server({server})

// se escuchan los eventos  de conexion
wsServer.on('connection', ws =>{
    ws.on('message', data =>{

        // se itera a cada uno de los clientes que se encuentran conectados
        console.log(wsServer.clients);
        wsServer.clients.forEach( client =>{
            
            if (client.readyState === WebSocket.OPEN){
                client.send(data)
            }
        })
    })
})


server.listen(PORT,HOST,()=>console.log(`SERVING AT 🚀 ws://${HOST}:${PORT}`))

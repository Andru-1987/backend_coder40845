const   PORT = 3000,
        HOST = 'localhost';

const WURL = `ws://${HOST}:${PORT}`
const mySocket = new WebSocket(WURL)

// cuerpo de los mensajes con los sockets

const sendMsg = document.querySelector('#nuevo-mensaje') 
const getMsg = document.querySelector('#respuestas') 


const open = () => console.log('OPEN WEBSOCKET');

const error = e =>{
    console.error('Error en webSocket', e);
}

const close = () =>console.log('WebSocket cerrado');

const msg = async e =>{
    console.log('recibiste un mensaje');
    // recibe un blob
    console.log(e.data);
    const incomeMsg = await e.data.text();
    getMsg.innerHTML = `${getMsg.innerHTML.concat(incomeMsg)} <hr>`
}

const sendMessage = e =>{
    if (e.code == 'Enter'){
        mySocket.send(sendMsg.value)
        sendMsg.value = ''
    }
}

// Cuando se envia usando un addeventlistener en el websocket
mySocket.addEventListener('open',open)
mySocket.addEventListener('message',msg)
mySocket.addEventListener('error',error)
mySocket.addEventListener('close',close)


sendMsg.addEventListener('keypress',sendMessage)


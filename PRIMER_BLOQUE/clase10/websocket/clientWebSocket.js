const   PORT = 3000,
        HOST = 'localhost';

const WURL = `ws://${HOST}:${PORT}`
const mySocket = new WebSocket()


const open = () => console.log('OPEN WEBSOCKET');

mySocket.addEventListener('open',open);
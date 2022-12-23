const http = require('http');
const fs = require('fs').promises;
const path = require('path');

// const server = http.createServer((req,res) =>{
//     console.log(req.body);
//     res.writeHead(200,{'Content-Type':'text/html'});
//     res.write('<h1>Hola mundo!</h1>')
//     res.end();
//     console.log('creando un server!')
// })


const timer = () => new Date().getHours();

const range = (time,min,max) => time>=min && time <=max

const dateSetInterval = (time)=>{
    let ranges = {
        dia : [6,12],
        tarde: [13,19],
        noche: [20,5]
    };

    if (range(time, ...ranges.dia)) return 'Buenos días' ;
    if (range(time,...ranges.tarde)) return 'Buenas tardes' ;
    if (range(time, ...ranges.noche)) return 'Buenas Noches';
}

const reqListener = (req,res)=>{

    url = path.join(__dirname,'..','files','index.html');

    fs.readFile(url)
    .then(data => {
        console.log(dateSetInterval(timer()));
        res.writeHead(200 , {'Content-Type':'text/html'});
        res.write(data);
        res.end();
    })
    .catch(e =>{
        res.writeHead(500);
        res.end(e);
        // console.log(e);
        return;
    })
};

server = http.createServer(reqListener)


module.exports = server
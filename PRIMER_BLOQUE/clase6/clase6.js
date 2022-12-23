// const moment = require('moment');
// const http = require('http');
// const PORT = 8080 ; 
// const HOST = 'localhost';



// /**
//  * obtiene la hora
// */
// const timer = () => new Date().getHours();
// /**
//  * un comparador de rango de horarios
// */
// const range = (time,min,max) => {
//     if (min>max){

//         return time>=min && time <=max
//     }
//     else{
//         return time>=min && time <=23 || time <=0 && time <=5
//     }
// }


// /**
//  * hago el callback
// */
// const dateSetInterval = (time)=>{
//     let ranges = {
//         dia : [6,12],
//         tarde: [13,19],
//         noche: [20,5]
//     };

//     if (range(time, ...ranges.dia)) return 'Buenos días' ;
//     if (range(time,...ranges.tarde)) return 'Buenas tardes' ;
//     if (range(time, ...ranges.noche)) return 'Buenas Noches';
// }

// const reqListener = (req,res)=>{

//     let greeting = dateSetInterval( timer() );
    
//     console.log({ moment: moment().format('L') });

//     res.end(greeting);
    
// }


// let server = http.createServer(reqListener);


// server.listen( PORT,
//     ()=>console.log(`Server at port http://${HOST}:${PORT}`)
// )


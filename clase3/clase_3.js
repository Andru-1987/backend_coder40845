/*
    Ejercicio sobre el login y el status
*/
/*
const logger = (dataToLog,text) => {
    // write a file
    console.log(text);

    dataToLog('archivo escrito con exito');
}


logger( data =>{
    const date = new Date(Date.now()).toLocaleDateString();
    console.warn(`${date}: ${data}`);
} ,'esto es para el callback');
*/
/*
    Callback con sintaxis arrrow

    operacion(n,m,cb)
 // Despues pasar a TS

*/


const operacion = (...numbers) => {
    //usando algo de closure
    return  cb => cb(numbers)
}

let numbers = operacion(2,2,3);

let functions = {
    suma : args=> args.reduce((a,b)=>a+b , 0),
    resta:args => args.reduce((a,b)=> a-b , 0),
    division:args => args.length > 2 ? -1: args[0]/args[1],
    multiplicacion: args=> args.reduce((a,b)=>a*b , 1),
    potencia: args=> args.reduce((a,b)=> Math.pow(a,b) , args[0]),
}


/*
Creacion de promesas | Evita los callback hells
*/

// function dividir(n ,m){
//     return new Promise((res,rej)=> {
//         if (m == 0){
//             rej({ error: 'no podes dividir por cero',status:false})
//         }else{
//             res( n /m);
//         }
//     })
// }


// dividir(4,1)
// .then(result => console.log(result))
// .catch(e=>console.log(e.error, e.status))


/*

Asyncronia

*/

/*
let promiseDeliverData = () => new Promise( (res,rej)=>{
    setTimeout( () => res('this is a promise') , 3000);
});


let displayNumber = async () =>  {
    let dataReturned = await promiseDeliverData()  ;
    console.log(dataReturned);
}

displayNumber()

*/


/*SetInterval

Intervals son dedicados a intervalos de tiempos
*/


function showData(...args){
    index = 0;
    for (const data of args){
        setTimeout( e => console.log(data) , 1000 * index++)
        
    }
}

setInterval(showData,4000,'manuel','martin','sergie','meline');










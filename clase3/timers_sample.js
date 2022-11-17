/*codigo anderson*/

const demonstrateTimers = (param = '') => {
    console.log(`Hello world after delay! ${param}...`);
  };




// const process = () =>{
//   console.log('Comienza la ejecución...');
//   //en este caso la ejecución no bloquea la función pues se agrega al event loop
//   setTimeout(demonstrateTimers , 2000);
//   console.log('Continúa la operación...');
// }
  
// process();

// const processWithParamas = (param) =>{
//   console.log('Comienza la ejecución...');
//   //en este caso la ejecución no bloquea la función pues se agrega al event loop
//   setTimeout(demonstrateTimers , 2000, param);

//   console.log('Continúa la operación...');
// }

// processWithParamas('Esto es una parametro') ;



/*Intervalos*/


const processIntervals = ()=>{
    
    let intervalId = setInterval(demonstrateTimers, 1500);
    
    console.log('Continua la operacion');
    
    setTimeout(() => clearInterval(intervalId), 4500);
}

processIntervals();

// Bibliografia - Extra:
// https://es.javascript.info/settimeout-setinterval
// https://geekflare.com/javascript-event-loops/


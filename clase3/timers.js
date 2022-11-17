// const demonstrateTimers = (param = '') => {
//     console.log(`Hello world after delay! ${param}...`);
//   };
  

  
  // console.log('Comienza la ejecución');
  
  // No hace falta importar ni definir la función, puesto que es nativa
  // El primer argumento es una función (callback!) y el segundo la cantidad de ms que se esperarán para ejecutar el callback
  
  // setTimeout(demonstrateTimers, 2000);
  
  // HINT: Correr primero con esta línea comentada, luego quitar el comentario para demostrar el funcionamiento no bloqueante
  // console.log('Continúa la operación');
  
/*codigo anderson*/

// const process = () =>{
//   console.log('Comienza la ejecución...');
//   //en este caso la ejecución no bloquea la función pues se agrega al event loop
//   setTimeout(demonstrateTimers , 2000);
//   console.log('Continúa la operación...');
// }
  
// // process();

// const processWithParamas = (param) =>{
//   console.log('Comienza la ejecución...');
//   //en este caso la ejecución no bloquea la función pues se agrega al event loop
//   setTimeout(demonstrateTimers , 2000, param);
//   console.log('Continúa la operación...');
// }

// processWithParamas('Esto es una parametro') ;



/* */


// let intervalId = setInterval(demonstrateTimers, 1500);

// console.log('Continua la operacion');

// setTimeout(() => clearInterval(intervalId), 4500);
//   /*
  // HINT: Observar que no se ejecuta al principio la función! (la primera ejecución sucede después del primer temporizador)
  // Al igual que setTimeout, recibe una función (callback) y la cantidad de ms que se esperarán antes de cada ejecución
  // HINT: Correrlo una vez como está, y a la siguiente resolver el problema de que se ejecute también al iniciar el programa (hint: Llamar antes a la función fuera del setInterval y luego el setInterval)
  // setInterval(demonstrateTimers, 1500);
  
  // HINT Correr primero con esta línea comentada, luego quitar el comentario para demostrar el funcionamiento no bloqueante
  // console.log('Continúa la operación');
  /* */
  
  
  // Uso de clear interval
  // El objeto devuelto por setInterval() se usa como argumento para llamar a la función clearInterval().
  // Entonces debemos crear una constante y asignarle el valor de setInterval, luego llamamos a clearInterval sobre esa constante
  // const setIntervalObject = setInterval(demonstrateTimers, 1000);
  // HINT: No va a funcionar. El programa se cierra inmediatamente porque llamamos setInterval e inmediatamente (antes de la primera ejecución) llamamos a clearInterval
  // clearInterval(setIntervalObject);
  
  /*
  // HINT: Llamamos al clearInterval después de un timeout de 4500 ms (debemos ver 4 veces el llamado a setInterval)
  setTimeout(() => clearInterval(setIntervalObject), 4500);
  /* */



  // Bibliografia - Extra:
  // https://es.javascript.info/settimeout-setinterval
  // https://geekflare.com/javascript-event-loops/




// const deliver = ()=>console.log('entregando');
// const final = ()=>console.log('no se quemó');
// const cook = cb => {
//   console.log('2 init');

//   setTimeout(()=>{
//     console.log('3 init');
//     cb();
//     final();
//   }, 1000)
// };


// console.log('1 init');

// cook(deliver) ;

// console.log('hablar con invitados')



/**
 * 
 * valores de ejercicio
 * 
*/


const operacion = (...numbers) => {
  //usando algo de closure
  return  cb => cb(numbers)
}


let functions = {
  suma : args=> args.reduce((a,b)=>a+b , 0),
  resta:args => args.reduce((a,b)=> a-b , 0),
  division:args => args.length > 2 ? -1: args[0]/args[1],
  multiplicacion: args=> args.reduce((a,b)=>a*b , 1),
  potencia: args=> args.reduce((a,b)=> Math.pow(a,b) , args[0]),
}


let numbers = operacion(2,2,3);

console.log(numbers(functions.suma));
console.log(numbers(functions.resta));
console.log(numbers(functions.division));
console.log(numbers(functions.multiplicacion));
console.log(numbers(functions.potencia));






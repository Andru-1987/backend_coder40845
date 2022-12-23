/*
    ppt
*/
/*

    Creando los ejercicios:
    - Crear un proyecto node.js que genere 10k números aleatorios en el rango de 1 al 20

    - Crear un objeto cuyas claves sean los numeros salidos y el valor asociado a cada clave sera la cantidad de veces que salió dicho numero.
    Representar por consola los resultados

*/

const { fstat } = require("fs");


// const generator = (size) => [...Array(size).fill()].map(e => parseInt(Math.random() * 20))

// const array = generator(1000) 

// console.log(array);


/*
const createObject = (array) => {
    
    let objetoIterador = {} ;
    
    for (const _ of array){
        objetoIterador[_] = objetoIterador[_]? objetoIterador[_]+1: 1;
    }
    
    return {objetoIterador}
}


let array = generator(1000)

console.log( createObject(array) );

*/


// 2 Array de objects


const productos = [
    { id:1, nombre:'Escuadra', precio:323.45 },
    { id:2, nombre:'Calculadora', precio:234.56 },
    { id:3, nombre:'Globo Terráqueo', precio:45.67 },
    { id:4, nombre:'Paleta Pintura', precio:456.78 },
    { id:5, nombre:'Reloj', precio:67.89 },
    { id:6, nombre:'Agenda', precio:78.90 }
]



console.log(productos.reduce((a,b) => a + b.nombre + ',','').slice(0,-1));


// class Productos{
//     constructor(data){
//         this.productos = data;
//     }

//     setProducto(producto){
//         if(producto){

//             this.productos.push(producto)
//         }
//         else{
//             console.log('no fue seteado ninguno');
//         }
//     }
// }

// class ProductosBuilder{

// //patron builder

//     constructor(prd){
//         this.productos = new Productos(prd);
//     }

//     display(header = 'Lista nombres: '){
//         this.productos.nombres = this.productos.productos.reduce((a,b) => a + b.nombre + ',', header).slice(0,-1)
//         return this
//     }

//     totalPrecio(){
//         this.productos.total =parseFloat(this.productos.productos.reduce( (a,b) => a+b.precio, 0).toFixed(2))
//         return this  
//     }

//     avgProductos(){
        
//         this.productos.avg = parseFloat((this.productos.total/ this.productos.productos.length).toFixed(2))
//         return this
//     }

//     max(){
        
//         this.productos.max = Math.max( ...this.productos.productos.map(e => e.precio) )
//         return this
//     }

//     min(){

//         this.productos.min = Math.min(...this.productos.productos.map(e => e.precio) )
//         return this

//     }


//     build(){
//         return this.productos
//     }
// }


// let prd =   new ProductosBuilder(productos)
//                 .display()
//                 // .totalPrecio()
//                 // .avgProductos()
//                 // .max()
//                 .min()
//                 // .build() //me termina de confeccionar o construir el objecto


// console.log(prd);


const fs = require('fs')

class Data{

    async getAll(){

       return fs.promises.readFile('./productos.json','utf-8')
        .then( value => JSON.parse(value))
        .then( productos =>  this.productos = productos)
        .catch(e => console.log(e))
        
    }

}


let data = new Data();

data.getAll()
.then( () => console.log(data.productos))



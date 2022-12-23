/*
Promises en JS
*/


console.log('Promesas');

// Imaginemos como crear una promesa de la siguiente forma:


/*
const multiplicar = (boolean, a,b)=>{
    return new Promise( (res, rej)=>{
        if (boolean) return res(a *b);
        else return rej('no se puede')
    })
}


multiplicar(false,1,2)
.then(e => console.log(e))
.catch(e => console.log(e))
*/

// const multiplicar = (boolean, a,b)=>{
//     return new Promise( (res, rej)=>{
//         if (boolean){

//             setTimeout( () => res(a*b), 2000 )
//         }
        
//         else return rej('no se puede')
//     })
// }


// multiplicar(true,1,2)
// .then(e => console.log(e))
// .catch(e => console.log(e))




const pagarAlProfe = (tengoDinero, dinero)=>{

    return new Promise( (res,rej)=>{
    if(tengoDinero){
        setTimeout(()=>res(`te pago ${dinero} en 2 seg`),2000);
    }
    else return rej('sorry no tengo plata')
        }   
    )
}


pagarAlProfe(false, 2000)
.then(e => console.log(e))
.catch(error => console.log(error))



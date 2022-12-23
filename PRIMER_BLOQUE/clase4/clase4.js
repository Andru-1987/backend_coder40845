/*
  Manejo de archivos en Js  
*/

/*
const popper = (word,time,fn) =>{ 
    index_length = word.length;

    word.split('').forEach((letter,index)=>setTimeout(() => {
    console.log(letter) 
}, index*time))

    setTimeout(fn(),index_length*time);
}

const displayLetters =   (word , fn) => {
     popper(word,250,fn);
    //await fn(); //me lo va disparar antes
}

// displayLetters('hola',()=>console.log('terminé'))


// Para lo cual generaremos una promesa 


const delayTime = (word,time, fn)=> new Promise( 
    (res,rej) => res(letterPopper(word,time,fn))
)

const letterPopper = (word,time,fn) =>{ 
    word.split('').forEach((letter,index)=>setTimeout(() => {
    console.log(letter)
    }, index*time)) ;
    setTimeout(fn,word.length*time);
}


delayTime('holas',250,()=>console.log('termine'))


*/

/*

modulo de FileSystem

*/

/*

const fs = require('fs');
const path = require('path')

// console.log(__dirname , process.cwd(), __filename)

joined_path = path.join(__dirname,'/Files/text.txt')

let data = fs.readFileSync(joined_path,'utf-8')

console.log(data)

let persona = {
    nombre : 'Anderson',
    edad: 34 ,
    email: 'email@mail.com'
}


persona = {
    nombre : 'Laboriel',
    edad: 44 ,
    email: 'mail@mail.com'
}

fs.appendFileSync(joined_path, JSON.stringify(persona))

fs.unlinkSync(joined_path)

*/

/*
    Manejo de errores

    Desafío fecha y hora
    Realizar un programa que:
    A) Guarde en un archivo llamado fyh.txt la fecha y hora actual.
    B) Lea nuestro propio archivo de programa y lo muestre por consola.
    C) Incluya el manejo de errores con try catch (progresando las excepciones con throw new Error).

    */

/*
const fs = require('fs');
const path = require('path');
const crypto = require('crypto')


function record( {data_uuid,date_set,time_set,status,log} ){
    return `${data_uuid}: ${date_set} | ${time_set} | ${status} | ${log}\n`;
}

function logger(sectorLogging){
    
    let path_sector = path.join(__dirname,`/Files/${sectorLogging}.txt`);
    let time_set = new Date(Date.now()).toLocaleTimeString()
    let date_set = new Date(Date.now()).toLocaleDateString()
    
    let data = {
        data_uuid: crypto.randomUUID(),
        date_set,
        time_set,
        log:'Status of a file',
        status: Math.random()>0.5
    }

    try{
        if (fs.existsSync(path_sector)){
            fs.appendFileSync(path_sector,record(data));
        }
        else{
            fs.writeFileSync(path_sector,record(data));
        }
    }
    catch(e){
        if (fs.existsSync(path_sector)){
            data = {...data , ... {log: e} }
            fs.appendFileSync(path_sector,record(data));
        }else{
            console.log(e);
        }
    }

}

let log_stats = setInterval(logger,1500,'ventas')

setTimeout(
    ()=> clearInterval(log_stats) , 10000
)


*/

/*
    Metodos asincronicos
*/

const fs = require('fs');
const path = require('path');

// fs.readdir( __dirname, (e,success) => Boolean(e)?console.log(e):console.log(success) )

let joined_path = path.join(__dirname,'Files/values.csv') ;

fs.readFile(joined_path,'utf-8',
(e,success) => Boolean(e)?console.log('somethig went wrong'):console.log(success))


/**
 * Modo sincronico
 */










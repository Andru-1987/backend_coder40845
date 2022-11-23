/*
Clase en vivo ::  Rafael
*/

const { fstat } = require("fs");


const popper = (word,time,fn) =>{ 
    let index_length = word.length;
    
    word.split('')
    .forEach((letter,index)=>setTimeout(() => {
    console.log(letter)
     
    }, index*time))

    setTimeout(fn,index_length*time);
}

const letters = (word,time,cb)=>{

    let counter = 0

    const interId = setInterval(() => {
        if(word[counter]){
            console.log(word[counter]);
            counter++;
        }
        else{
            clearInterval(interId);
            cb();
        }
    }, time);


}


// popper('hola, como estamos?', 100, ()=> console.log('terminamos!'))

// letters('ola k ase?',100,()=>console.log('termine!') )

// console.log(__dirname , process.cwd(), __filename)


/*
const fs = require('fs');
const path = require('path')


const dataAppender = (persona)=>{

    joined_path = path.join(__dirname,'/files/text.txt')
    
    
    try{
        if (fs.existsSync(joined_path)){
            fs.appendFileSync(joined_path, `${JSON.stringify(persona)}\n`)
    
        }else{
            fs.mkdirSync('./files');
            fs.writeFileSync(joined_path,`${JSON.stringify(persona)}\n`)
        }
    
        let fileData = fs.readFileSync(joined_path,'utf-8');
    
        console.log({fileData});
    }
    catch(e){
        console.log(e);
    }
}


let persona = {
    nombre : 'Laboriel',
    edad: 44 ,
    email: 'mail@mail.com'
}


dataAppender(persona)
dataAppender({'nombre':'Juan Carlos'})



*/


// const fs = require('fs');
// const path = require('path');
// const crypto = require('crypto')


// function record( {data_uuid,date_set,time_set,status,log} ){
//     return `${data_uuid}: ${date_set} | ${time_set} | ${status} | ${log}\n`;
// }

// function logger(sectorLogging){
    
//     let path_sector = path.join(__dirname,`/files/${sectorLogging}.txt`);
    
//     let time_set = new Date(Date.now()).toLocaleTimeString()
//     let date_set = new Date(Date.now()).toLocaleDateString()
    
//     let data = {
//         data_uuid: crypto.randomUUID(),
//         date_set,
//         time_set,
//         log:'Status of a file',
//         status: Math.random()>0.5
//     }

//     try{
//         if (fs.existsSync(path_sector)){

//             fs.appendFileSync(path_sector,record(data));
//         }
//         else{
//             fs.mkdirSync('./files');
//             fs.writeFileSync(path_sector,record(data));
//         }
//     }
//     catch(e){
//         console.log(e);
//     }

// }

// let log_stats = setInterval(logger,1500,'ventas')


// setTimeout(clearInterval,15000,log_stats)




// fs.readdir('../clase4',(e,v) =>{
//     if(e){
//         console.log(e)
//     }else{
//         console.log(v);
//     }

// })



const fs = require('fs');

const fileToRead =  '../package.json';

// fs.promises.readFile(fileToRead , 'utf-8')
// .then(v=>console.log(v))
// .catch(e => console.log(e))

const dataReader = () =>{
    setTimeout(async ()=>{
    
            let data = await fs.promises.readFile(fileToRead , 'utf-8');
            console.log(data);

    },2000)
}


dataReader();




const fs=require('fs')

class Data{

async getAll(){

    return await fs.promises.readFile('./productos.json','utf-8')

    }

}

let data=new Data();

console.log(data.getAll());




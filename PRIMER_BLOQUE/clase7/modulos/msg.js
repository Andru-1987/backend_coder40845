const express = require('express');
const app = express();

/**
 * 
 * Get EndPouints
 * 
*/

let frase = 'Hola mundo. ¿Cómo estás?';
const notDefined = [undefined,null];
const remover = ['.','¿','?','!'];


const limpiarFrase = frase =>{

    for (let char of remover){
        frase = frase.replaceAll(char,' ')
    }

    return frase
            .split(' ')
            .map(word => word.trim())
            .filter(word => word != '');
                    
 
}


app.get('/api/frase',(req,res)=>{
    console.log('devuelve la frase!');
    res.json({frase})
})
app.get('/api/letras/:num',(req,res)=>{
    
    
    data = req.params.num;
    console.log(`data ingresada es ${data}`);
    
    try{
        data = parseInt(data);

        let msg = null;
    
        if (notDefined.includes(data)){
            msg = 'no params';
            res.json({msg});
        }


        msg = {'letra':frase.charAt(--data)};
        res.json(msg);
        res.end();
    }
    catch(e){
        res.json({msg:'not a number'});
        res.end();
    }

    
})
app.get('/api/palabras/:num',(req,res)=>{

    let palabrasArray = limpiarFrase(frase);

    console.log(palabrasArray);
    
    let data = parseInt(req.params.num);

    msg = {'letra':palabrasArray[data-1]};

    res.json(palabrasArray[--data] == undefined?{msg:'no hay palabra'}:msg)

})



module.exports = app;


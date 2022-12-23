const express =require('express')
const app = express()
const f = require('fs');
const { text } = require('stream/consumers');

class File{
    constructor(path){
        this.path = path;
    }

    get_data(){
        return f.readFileSync(this.path,{encoding:'utf-8'})
        
    }

    save_data(frase){
        f.writeFileSync(this.path, frase, {encoding:'utf-8'} )
    }

    add_data(frase){
        f.appendFileSync(this.path,frase)
    }
}

app.use(express.json())
app.use(express.urlencoded({extended:true}))



path = '/api'


app.get(`${path}/frase`,(req,res)=>{

    archivo = new File('./clase7/texto.txt');
    data = archivo.get_data()
    
    res.json({data})

})

app.get(`${path}/palabras/:pos`,(req,res)=>{

    let archivo = new File('./clase7/texto.txt');
    data = archivo.get_data().split(' ');

    let {pos} = req.params;

    if (data[--pos] == undefined){
        res.status(401).json({msg:'no data'})
        return
    }

    res.json(data[--pos]);
    

})

app.post(`${path}/palabras`, 
    (req,res) =>{
        let archivo = new File('./clase7/texto.txt');
        
        let  {palabra} = req.body

        archivo.add_data(' '+palabra)

        res.json({palabra})

    }

)

app.put(`${path}/palabras/:pos`,(req,res)=>{

    let archivo = new File('./clase7/texto.txt');
    let {pos} = req.params
    let {palabra} = req.body

    let texto_array = archivo.get_data().split(' ')

    
    let data = {
        nuevo: palabra ,
        anterior: texto_array[--pos] 
    }
        
    
    let text = archivo.get_data().replace(texto_array[pos],palabra)
        
    archivo.save_data(text)

    res.status(200).json({data})
    res.end()

})



app.delete(`${path}/palabras/:pos`,(req,res)=>{

    let archivo = new File('./clase7/texto.txt');
    let {pos} = req.params
    let {palabra} = req.body

    texto_array = archivo.get_data().split(' ')
    texto_pos = texto_array[--pos]

    if(texto_pos == undefined){
        res.status(200).json({msg:'no data to delete'})
        res.end()
        return
    }

    data = texto_array.filter(e => e!=texto_pos).join(' ')

    archivo.save_data(data)

    res.json({data})

})


app.listen(8080,'localhost',()=>console.log('Serving: port 8080'))



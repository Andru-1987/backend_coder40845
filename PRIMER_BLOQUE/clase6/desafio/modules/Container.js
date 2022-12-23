const createrFile =  require('./creator.js')
const readerFile =  require('./reader.js')
const saverData =  require('./saver.js')

const fs  = require('fs');
const path = require('path')

module.exports =  class Contenedor{

    
    constructor(nombreFile){
        this.folder = 'file'
        this.folder_path = path.join(__dirname,this.folder);
        this.file = path.join(__dirname,`${this.folder}/${nombreFile}.json`) ;
        
    }

    
    
    async creator(){
        await createrFile(this.folder_path,this.file)
    }

    /**
     * 
     * @params objectSchema = { title :str,
     *                          price : number
     *                          thumbnail:str
     *                          id: number
     * }
    */
    async save(object){


        await this.creator();
        
        let dataToPush

        if (object){
            
            let data = await readerFile(this.file);

            object.id = await data.length + 1;
            
            dataToPush = await data;

            dataToPush.push(object)

            await saverData(this.file,dataToPush);
        
        }else{
            console.log('No hay datos  ingresados');
        }

        
        return object.id;
    }
    

    async getById(number){
        try{

            if (! number){
                console.log('no se ingresó numero')
                return null;
            }
    
            let data = await readerFile(this.file);
            
            return data.filter( e => e.id == number)!=0?data.filter( e => e.id == number):null;
        }catch(e){
            console.log(e);
        }
               
    }
    
    getAll(){
        return readerFile(this.file)
    }
    

    async deleteById(number){
        try{

            let data = await readerFile(this.file);
            
            saverData(this.file , await data.filter(e => e.id != number) )
                        
        }
        catch(e){
            console.log();
        }


    }
    async deleteAll(){
        try{

            let dataInit = [];
    
            await fs.promises.writeFile(this.file , JSON.stringify(dataInit));

        }catch(e){
            console.log(e);
        }
    }

}




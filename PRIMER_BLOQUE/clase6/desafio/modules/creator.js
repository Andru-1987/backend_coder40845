const fs  = require("fs");

async function createrFile(url_path,file){
    try{
        let dataInit = [];


        if (fs.existsSync(url_path) == false){
            await fs.promises.mkdir(url_path);
            
        }
        
        if(fs.existsSync(file) == false){
            await fs.promises.writeFile(file , JSON.stringify(dataInit));
        }
        
    }
    catch(e){
        console.log(e);
    }
};

module.exports = createrFile;
const fs  = require("fs");

async function createrFile(directory,file){
    try{
        let dataInit = [];

        if (fs.existsSync(directory) == false){
            await fs.promises.mkdir(directory);
            
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
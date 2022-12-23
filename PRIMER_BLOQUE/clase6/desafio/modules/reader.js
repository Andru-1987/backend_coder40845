const fs  = require("fs");

async function readerFile(path){
    if (path){
        try{

            let dataRead = await fs.promises.readFile(path);
            let values = await JSON.parse(dataRead);
            return values;
        }
        catch(e){
            console.log(e);
        }

    }
}


module.exports = readerFile;


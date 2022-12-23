const fs = require('fs');


async function saverData(path,data){
    let saveObject = JSON.stringify(data);
   try {
        
       await fs.promises.writeFile(path,saveObject)
   }
   catch(e) {
    console.log(e);
   }
}

module.exports = saverData;
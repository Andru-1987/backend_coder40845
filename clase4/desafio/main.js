const Contenedor = require('./Contenedor')


function main(){

    dataContainer = new Contenedor('marcelo');
    dataContainer.creator();

    // Steps to run the challengue

    // create one
    
    
    dataContainer.save({title: 'test'})


}


main();
/**
 * { title :str,
 *  price:number,
 * thumbnail:str
 * id:number } -- generado por la class Container
 * 
*/

class ProductoDTO{

    title;
    price;
    thumbnail;

    constructor(data){
        this.title = data.title;
        this.price = data.price;
        this.thumbnail = data.thumbnail;

    }

}

module.exports = ProductoDTO;
class ProductsDb {
  constructor(database) {
    this.database = database;
  }

  save(product) {
    if (!product) {
      return "no data";
    }

    product.id = this.database.length + 1;
    this.database.push(product);
    return "product added";
  }

  all() {
    let products = this.database;
    return { products };
  }

  last() {
    let producto = this.database.at(-1);
    return { producto };
  }

  get(id) {
    if (!id) {
      return "no id";
    }

    let product = this.database.filter((product) => product.id == id);

    if (product == []) {
      return "no product match";
    }

    return { product };
  }
  del(id) {
    this.database.filter((product) => product.id != id);
    return;
  }
}

class ProductDTO {
  constructor(nombre, precio, thumbnail) {
    this.nombre = nombre;
    this.precio = precio;
    this.thumbnail = thumbnail;
  }

  setDB(db) {
    this.database = db;
  }

  save() {
    this.database.save(this);
    return;
  }

  del() {
    this.database.del(this.id);
  }
}

module.exports = { ProductsDb, ProductDTO };

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || "127.0.0.1";
const path = require("path");
const express = require("express");
const app = express();
const hbs = require("express-handlebars");
const { ProductsDb } = require("./backend/Producto");
const { ProductDTO } = require("./backend/Producto");
const SocketIO = require("socket.io");
const cors = require("cors");
const { Socket } = require("dgram");

let db_init = [
  {
    nombre: "tv",
    precio: 98888,
    thumbnail:
      "https://resizer.iproimg.com/unsafe/880x/filters:format(webp)/https://assets.iprofesional.com/assets/jpg/2022/04/535096.jpg",
  },

  {
    nombre: "tiger",
    precio: 10000,
    thumbnail:
      "https://user-images.githubusercontent.com/26737610/43894372-2039164c-9bd2-11e8-9716-70a29c3202db.jpg",
  },
  {
    nombre: "cascade",
    precio: 19000,
    thumbnail:
      "https://user-images.githubusercontent.com/26737610/43894242-d0ef9930-9bd1-11e8-945f-c90496fe1325.png",
  },
];

app.use(express.static(path.join(__dirname, "front_end/public")));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

optionsHbs = {
  extname: ".hbs",
  defaultLayout: "home",
  layoutsDir: path.join(__dirname, "front_end/views/layouts"),
  partialsDir: path.join(__dirname, "front_end/views/partials"),
};

app.engine(".hbs", hbs.engine(optionsHbs));
app.set("view engine", "hbs");
app.set("views", "./front_end/views");

app.get("/", (req, res) => {
  res.render("main");
});

app.get("/producto", (req, res) => {
  res.render("producto");
});

app.get("/productos", (req, res) => {
  res.render("productos");
});

app.post("/producto", (req, res) => {
  res.render("productos");
});

let server = app.listen(PORT, HOST, () =>
  console.log(`🚀 up at http://${HOST}:${PORT}`)
);

const io = SocketIO(server);

const savingProduct = (product) => {
  let { nombre, precio, thumbnail } = product;

  if (nombre == "" || precio == "") {
    res.redirect("/producto");
    return;
  }

  let newItem = new ProductDTO(nombre, precio, thumbnail);
  DB.save(newItem);
};

// usando websockets

io.on("connection", (socket) => {
  console.log("conexion", socket.id);

  socket.emit("server:data", { producto: db_init.at(-1) });
  io.sockets.emit("server:fullData", { data: db_init });

  socket.on("cliente:data", (product) => {
    console.log(product);
    db_init.push(product);
    socket.emit("server:data", { producto: db_init.at(-1) });
    io.sockets.emit("server:fullData", { data: db_init });
  });

  socket.on("client:chat", (msg) => {
    socket.broadcast.emit("server:chat", msg);
  });
});

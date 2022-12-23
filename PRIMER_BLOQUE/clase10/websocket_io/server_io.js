const PORT = 3001;
const HOST = "127.0.0.1";
const express = require("express");
const app = express();
const SocketIO = require("socket.io");
const path = require("path");

app.use(express.static(path.join(__dirname, "public")));

const server = app.listen(PORT, HOST, () =>
  console.log(`SERVING AT 🚀 http://${HOST}:${PORT}`)
);

// generacion de ws
// Este es el servido  que me permite levantar tanto el cliente como el servidor

const io = SocketIO(server);
let message_backup = [];

io.on(
  "connection",

  (socket) => {
    socket.on("chat:msg", (data) => {
      message_data = { id: socket.id, data };
      message_backup.push(message_data);
      socket.broadcast.emit("chat:msg", message_data);
    });

    socket.on("chat:typing", (data) => {
      socket.broadcast.emit("chat:typing", data);
    });
  }
);

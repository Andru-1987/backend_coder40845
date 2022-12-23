// con esto estoy utilizando el conector del socket
// usando desde el servidor
const socket = io();

let msg = document.getElementById("input");
let sendBtn = document.querySelector("button");
let messages = document.getElementById("messages");
let userName = document.getElementById("userName");
let writer = document.getElementById("writer");

const inyector = ({ data, id }) => {
  let { user_name, msg } = data;
  if (data.msg == "") return;
  let li = document.createElement("li");
  li.innerText = `${user_name == "" ? id : user_name}: ${msg}`;
  messages.append(li);
};

socket.on("chat:msg", (data) => {
  writer.value = "";
  inyector(data);
});

socket.on("chat:typing", ({ data }) => {
  writer.value = `${data} está escribiendo`;
});

msg.addEventListener("keydown", () => {
  data = userName.value;
  socket.emit("chat:typing", { data });
});

sendBtn.addEventListener("click", (e) => {
  e.preventDefault();

  //para emitir lo que estoy haciendo
  let data = {
    user_name: userName.value,
    msg: msg.value,
  };
  socket.emit("chat:msg", data);
  msg.value = "";
});

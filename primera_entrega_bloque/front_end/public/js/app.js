const socket = io();

const falsyImg =
  "https://aioseo.com/wp-content/uploads/2021/04/how-to-find-and-fix-404-errors-in-wordpress.png.webp";

let btn = document.getElementById("create");

if (btn) {
  btn.addEventListener("click", (e) => {
    e.preventDefault();

    let formData = Array.from(document.querySelectorAll("form input")).map(
      (e) => e.value
    );

    product = {
      nombre: formData[0],
      precio: formData[1],
      thumbnail: checkerPattern(formData[2]) ? formData[2] : falsyImg,
    };

    socket.emit("cliente:data", product);
  });
}

const printer = ({ producto }) => {
  let { nombre, precio, thumbnail } = producto;

  let template = `
  <div class="card" >
    <img src="${
      checkerPattern(thumbnail) ? thumbnail : falsyImg
    }" class="card-img-top" alt="${nombre}">
                <div class="card-body">
                    <p>Producto : ${nombre}</p>
                    <p>Precio: ${precio}</p>
                    </div>
  </div>
                    
  `;

  document.querySelectorAll("#producto > *").forEach((e) => e.remove());
  let producto_ = document.getElementById("producto");

  if (producto_) {
    let div = document.createElement("div");
    div.innerHTML = template;

    producto_.appendChild(div);
  }
};

socket.on("server:data", (producto) => {
  printer(producto);
});

const checkerPattern = (url) => {
  let RegExp = /^(http).+/g;
  return RegExp.test(url);
};

const printerProducto = (producto) => {
  let { nombre, precio, thumbnail } = producto;

  let div = document.createElement("div");
  let template = `
  <div class="card" >
      <img src="${
        checkerPattern(thumbnail) ? thumbnail : falsyImg
      }" class="card-img-top" alt="${nombre}">
        <div class="card-body">
        <p>Producto : ${nombre}</p>
        <p>Precio: ${precio}</p>
      </div>
  </div>
  <br>                 
  `;
  div.innerHTML = template;

  return div;
};

const render = (productos) => {
  document.querySelectorAll("#productos > *").forEach((e) => e.remove());

  let productos_ = document.getElementById("productos");

  if (productos_) {
    let frag = new DocumentFragment();

    productos.forEach((p) => frag.appendChild(printerProducto(p)));

    productos_.appendChild(frag);
  }
};

socket.on("server:fullData", ({ data }) => {
  render(data);
});

// chat appuser

const retriveUserData = () => {
  let userName = document.getElementById("userName").value;
  let msg = document.getElementById("msg").value;

  return {
    userName,
    msg,
    time: new Date()
      .toISOString()
      .replace("T", " ")
      .replace("Z", " ")
      .split(".")[0],
  };
};

let btnMsg = document.querySelector("#button-addon2");

const renderMsg = (datamsg) => {
  let { userName, msg, time } = datamsg;

  let chatContainer = document.getElementById("messages");

  let div = document.createElement("div");
  let template = `
  
      <div class="toast show" role="alert" aria-live="assertive" aria-atomic="true">
        <div class="toast-header">
            <strong class="me-auto">${userName}</strong>
            <small class="text-muted">${time}</small>
        </div>
        <div class="toast-body">
            ${msg}
        </div>
      </div>
      <br>
  `;
  div.innerHTML = template;
  let frag = new DocumentFragment();
  frag.appendChild(div);

  chatContainer.appendChild(frag);
};

if (btnMsg) {
  btnMsg.addEventListener("click", (e) => {
    e.preventDefault();
    let msg = retriveUserData();
    socket.emit("client:chat", msg);
  });
}

socket.on("server:chat", (msg) => {
  renderMsg(msg);
});

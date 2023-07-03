const getProducts = async () => {
  const respuesta = await fetch("JS/product.json");
  const data = await respuesta.json();
  console.log(data);
  data.forEach((product) => {
    let content = document.createElement("div");
    let boton = document.createElement("button");
    boton.onclick = () => saveLocalStorage(product);
    content.className = "card";
    content.style = "width: 18rem;";
    boton.innerText = "Agregar al carrito";
    boton.className = "btn btn-primary";
    content.innerHTML = `
    <img src="${product.imagen}" class="card-img-top" alt="${product.imagen}">
    <div class="card-body">
    <h3 class="card-title">${product.nombre}</h3>
    <p class="card-text">${product.descripcion}</p>
    <p class="card-text">$${product.precio}</p>
    </div>
    `;
    content.appendChild(boton);
    $("#productos").append(content);
  });
};
getProducts();

const saveLocalStorage = (producto) => {
  const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  carrito.push(producto);
  localStorage.setItem("carrito", JSON.stringify(carrito));
};

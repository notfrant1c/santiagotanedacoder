const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
carrito.forEach((product) => {
  let content = document.createElement("div");
  content.className = "producto-compra";
  content.innerHTML = `
    <img src="${product.imagen}" id="imgproducto"alt="${product.imagen}">
    <h3 id="nombre-producto" >${product.nombre}</h3>
    <h3 id="precio">$${product.precio}</h3>
    <button id="borrar" class="btn btn-danger"> <i class="fa-regular fa-trash-can" style="color: #ffffff;"></i> </button>
    `;
  $("#productos-carrito").append(content);
});

const eliminarProducto = (id) => {
  const foundId = carrito.find((element) => element.id === id);

  console.log(foundId);

  carrito = product.filter((carritoId) => {
    return carritoId !== foundId;
  });
};
let eliminar = content.querySelector("#borrar");
eliminar.addEventListener("click", () => {
  eliminarProducto(product.id);
});

let carrito = [];

function agregarAlCarrito(producto) {
    carrito.push(producto);
    console.log("Producto agregado:", producto);
    actualizarCarrito();
}

function actualizarCarrito() {
    console.clear();
    console.log("Carrito de compras:");
    carrito.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - $${item.price}`);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const botones = document.querySelectorAll(".add-to-cart");
    botones.forEach((boton) => {
        boton.addEventListener("click", () => {
            const nombre = boton.getAttribute("data-name");
            const precio = parseFloat(boton.getAttribute("data-price"));
            const producto = { name: nombre, price: precio };
            agregarAlCarrito(producto);
        });
    });
});
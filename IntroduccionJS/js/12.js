"use strict"; // Esta línea ejecuta el código de una manera más estricta arrojando cualquier error que detecte
//Objeto
const producto = {
    nombreProducto: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}

Object.freeze(producto); // Previene que se cambien los valores del objeto, ni se puedan agregar propiedades, ni eliminar.
Object.seal(producto); // Previene que se agreguen o eliminen propiedades del objeto en cuestión, pero si modificar.
// producto.imagen = "imagen.jpg";
console.log(Object.isFrozen(producto));
console.log(producto);

